"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

function Works({ project }) {
  const [imageLoaded1, setImageLoaded1] = useState(false);
  const [imageError1, setImageError1] = useState(false);
  const [videoLoaded1, setVideoLoaded1] = useState(false);
  const [videoError1, setVideoError1] = useState(false);

  // Get image/video path and link from project data
  const image1Path = project?.gifImages[1];
  const image1Link = project?.gifImagesLinks?.[1]; // New optional link field
  const isVideo1 = image1Path && image1Path.toLowerCase().endsWith(".mp4");
  const isGif1 = image1Path && image1Path.toLowerCase().endsWith(".gif");

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

  // Initialize WOW.js for animations
  useEffect(() => {
    if (typeof window !== "undefined" && window.WOW) {
      new window.WOW().init();
    }
  }, []);

  // Function to render media content (image or video)
  const renderMedia = () => {
    if (!imageError1 && !videoError1 && image1Path) {
      const mediaContent = isVideo1 ? (
        <video
          src={image1Path}
          onLoadedData={handleVideo1Load}
          onError={handleVideo1Error}
          style={{
            opacity: videoLoaded1 ? 1 : 0.7,
            transition: "opacity 0.3s ease",
            width: "100%",
            height: "auto",
            borderRadius: "8px",
          }}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        />
      ) : (
        <Image
          src={image1Path}
          alt={`${project?.title || "Project"} work image 1`}
          onLoad={handleImage1Load}
          onError={handleImage1Error}
          style={{
            opacity: imageLoaded1 ? 1 : 0.7,
            transition: "opacity 0.3s ease",
            width: "100%",
            height: "auto",
            ...(isGif1 ? { borderRadius: "8px", display: "block" } : {}),
          }}
          width={800}
          height={600}
        />
      );

      // If there's a link, wrap the media in an anchor tag
      if (image1Link) {
        return (
          <a
            href={image1Link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", textDecoration: "none" }}
          >
            {mediaContent}
          </a>
        );
      }

      return mediaContent;
    }

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
        <p>Media could not be loaded</p>
      </div>
    );
  };

  return (
    <div className="">
      <div className="container">
        <div className="">
          <div className="container">
            <div className="img md-mb30 wow fadeInUp" data-wow-delay=".1s">
              {renderMedia()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
