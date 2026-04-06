"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";

function Works2({ project }) {
  const [imageLoaded1, setImageLoaded1] = useState(false);
  const [imageError1, setImageError1] = useState(false);
  const [videoLoaded1, setVideoLoaded1] = useState(false);
  const [videoError1, setVideoError1] = useState(false);
  const [imageStates, setImageStates] = useState({});
  const [videoStates, setVideoStates] = useState({});

  // Third hero slot (optional). Skip the whole block when empty — avoids a blank/placeholder bar on dark layouts.
  const tertiaryRaw = project?.gifImages?.[2];
  const image1Path =
    typeof tertiaryRaw === "string" && tertiaryRaw.trim().length > 0
      ? tertiaryRaw.trim()
      : null;
  const image1Link = image1Path ? project?.gifImagesLinks?.[2] : null;
  const isVideo1 = Boolean(image1Path?.toLowerCase().endsWith(".mp4"));
  const isVimeo1 = Boolean(image1Path?.includes("vimeo.com"));
  const projectImages = useMemo(() => project?.content?.images || [], [project]);
  const hasContentGalleryMedia = useMemo(
    () =>
      projectImages.some(
        (img) => typeof img?.url === "string" && img.url.trim().length > 0
      ),
    [projectImages]
  );
  const hideContentGallery = project?.content?.hideContentGallery === true;
  const showContentGallery = hasContentGalleryMedia && !hideContentGallery;

  // Initialize image and video states for collection images
  useEffect(() => {
    const initialImageStates = {};
    const initialVideoStates = {};
    projectImages.forEach((img, index) => {
      const isVid = img.url && img.url.toLowerCase().endsWith(".mp4");
      const isVimeo = img.url && img.url.includes("vimeo.com");
      if (isVid || isVimeo) {
        initialVideoStates[index] = { loaded: false, error: false };
      } else {
        initialImageStates[index] = { loaded: false, error: false };
      }
    });
    setImageStates(initialImageStates);
    setVideoStates(initialVideoStates);
  }, [projectImages]);

  const handleImage1Load = () => {
    setImageLoaded1(true);
    setImageError1(false);
  };

  const handleImage1Error = () => {
    setImageError1(true);
    setImageLoaded1(false);
  };

  const handleVideo1Load = () => {
    setVideoLoaded1(true);
    setVideoError1(false);
  };

  const handleVideo1Error = () => {
    setVideoError1(true);
    setVideoLoaded1(false);
  };

  const handleCollectionImageLoad = (index) => {
    setImageStates((prev) => ({
      ...prev,
      [index]: { ...prev[index], loaded: true, error: false },
    }));
  };

  const handleCollectionImageError = (index) => {
    setImageStates((prev) => ({
      ...prev,
      [index]: { ...prev[index], loaded: false, error: true },
    }));
  };

  const handleCollectionVideoLoad = (index) => {
    setVideoStates((prev) => ({
      ...prev,
      [index]: { ...prev[index], loaded: true, error: false },
    }));
  };

  const handleCollectionVideoError = (index) => {
    setVideoStates((prev) => ({
      ...prev,
      [index]: { ...prev[index], loaded: false, error: true },
    }));
  };

  // Initialize WOW.js for animations
  useEffect(() => {
    if (typeof window !== "undefined" && window.WOW) {
      new window.WOW().init();
    }
  }, []);

  // Helper function to extract Vimeo video ID from URL
  const getVimeoId = (url) => {
    if (!url || !url.includes("vimeo.com")) return null;

    // Handle different Vimeo URL formats
    const patterns = [
      /vimeo\.com\/(\d+)/, // https://vimeo.com/123456789
      /player\.vimeo\.com\/video\/(\d+)/, // https://player.vimeo.com/video/123456789
      /vimeo\.com\/channels\/[^\/]+\/(\d+)/, // https://vimeo.com/channels/staffpicks/123456789
      /vimeo\.com\/groups\/[^\/]+\/videos\/(\d+)/, // https://vimeo.com/groups/name/videos/123456789
    ];

    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }

    return null;
  };

  // Helper function to create Vimeo embed URL
  const getVimeoEmbedUrl = (url) => {
    const videoId = getVimeoId(url);
    if (!videoId) return null;

    return `https://player.vimeo.com/video/${videoId}?controls=1&autoplay=0&muted=0&loop=0&autopause=1`;
  };

  // Function to render media content (image, video, or Vimeo) with optional link
  const renderMedia = (
    mediaPath,
    mediaLink,
    isVideo,
    isVimeo,
    onLoad,
    onError,
    altText,
    style = {}
  ) => {
    if (!mediaPath) return null;

    let mediaContent;

    if (isVimeo) {
      const embedUrl = getVimeoEmbedUrl(mediaPath);
      if (!embedUrl) {
        // Fallback if Vimeo URL is invalid
        return (
          <div
            className="error-placeholder"
            style={{
              padding: "40px",
              textAlign: "center",
              backgroundColor: "#f5f5f5",
              borderRadius: "8px",
              minHeight: "200px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p>Invalid Vimeo URL</p>
          </div>
        );
      }

      mediaContent = (
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "0",
            paddingBottom: "56.25%", // 16:9 aspect ratio
            overflow: "hidden",
            borderRadius: "8px",
            ...style,
          }}
        >
          <iframe
            src={embedUrl}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            onLoad={onLoad}
            onError={onError}
            title={altText}
          />
        </div>
      );
    } else if (isVideo) {
      mediaContent = (
        <video
          src={mediaPath}
          onLoadedData={onLoad}
          onError={onError}
          style={{
            opacity: 1,
            transition: "opacity 0.3s ease",
            width: "100%",
            height: "auto",
            borderRadius: "8px",
            backgroundColor: "#000",
            ...style,
          }}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          preload="metadata"
        />
      );
    } else {
      const isGif =
        typeof mediaPath === "string" &&
        mediaPath.toLowerCase().endsWith(".gif");
      mediaContent = (
        <Image
          src={mediaPath}
          alt={altText}
          onLoad={onLoad}
          onError={onError}
          style={{
            opacity: 1,
            transition: "opacity 0.3s ease",
            width: "100%",
            height: "auto",
            ...(isGif ? { borderRadius: "8px", display: "block" } : {}),
            ...style,
          }}
          width={800}
          height={600}
        />
      );
    }

    // If there's a link, wrap the media in an anchor tag
    if (mediaLink) {
      return (
        <a
          href={mediaLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "block", textDecoration: "none" }}
        >
          {mediaContent}
        </a>
      );
    }

    return mediaContent;
  };

  return (
    <div className="section-padding pt-0 pb-0" style={{ marginBottom: "80px" }}>
      <div className="container">
        {/* Optional third media (Vimeo / mp4 / image). Omitted when not configured. */}
        {image1Path ? (
          <div className="img md-mb10 wow fadeInUp" data-wow-delay=".1s">
            {!imageError1 && !videoError1 ? (
              renderMedia(
                image1Path,
                image1Link,
                isVideo1,
                isVimeo1,
                isVideo1 || isVimeo1 ? handleVideo1Load : handleImage1Load,
                isVideo1 || isVimeo1 ? handleVideo1Error : handleImage1Error,
                `${project?.title || "Project"} work image 1`,
                { marginBottom: "10px" }
              )
            ) : (
              <div
                className="error-placeholder"
                style={{
                  padding: "40px",
                  textAlign: "center",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "8px",
                  minHeight: "200px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p>Media could not be loaded</p>
              </div>
            )}
          </div>
        ) : null}
        {/* For video projects, keep the cleaner media flow and hide the extra gallery grid */}
        {showContentGallery && (
          <div className="">
            {projectImages.map((image, index) => {
              const isVid =
                image.url && image.url.toLowerCase().endsWith(".mp4");
              const isVimeo = image.url && image.url.includes("vimeo.com");
              const imageLink = image.link; // Check if individual images have links
              return (
                <div key={index} className="section-padding pt-0 pb-0">
                  <div
                    className="img md-mb30 wow fadeInUp"
                    data-wow-delay={`${0.2 + index * 0.1}s`}
                  >
                    {isVid || isVimeo ? (
                      !videoStates[index]?.error ? (
                        <div className="collection-image-wrapper">
                          {renderMedia(
                            image.url,
                            imageLink,
                            isVid,
                            isVimeo,
                            () => handleCollectionVideoLoad(index),
                            () => handleCollectionVideoError(index),
                            image.caption ||
                              `${project?.title || "Project"} video ${
                                index + 1
                              }`
                          )}
                          {image.caption && (
                            <div
                              className="image-caption"
                              style={{
                                marginTop: "10px",
                                textAlign: "center",
                                fontSize: "14px",
                                color: "#666",
                                fontStyle: "italic",
                              }}
                            >
                              {image.caption}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div
                          className="error-placeholder"
                          style={{
                            padding: "40px",
                            textAlign: "center",
                            backgroundColor: "#f5f5f5",
                            borderRadius: "8px",
                            minHeight: "200px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <p>Media could not be loaded</p>
                        </div>
                      )
                    ) : !imageStates[index]?.error ? (
                      <div className="collection-image-wrapper">
                        {renderMedia(
                          image.url,
                          imageLink,
                          false,
                          false,
                          () => handleCollectionImageLoad(index),
                          () => handleCollectionImageError(index),
                          image.caption ||
                            `${project?.title || "Project"} image ${index + 1}`
                        )}
                        {image.caption && (
                          <div
                            className="image-caption"
                            style={{
                              marginTop: "10px",
                              textAlign: "center",
                              fontSize: "14px",
                              color: "#666",
                              fontStyle: "italic",
                            }}
                          >
                            {image.caption}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div
                        className="error-placeholder"
                        style={{
                          padding: "40px",
                          textAlign: "center",
                          backgroundColor: "#f5f5f5",
                          borderRadius: "8px",
                          minHeight: "200px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <p>Media could not be loaded</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Works2;
