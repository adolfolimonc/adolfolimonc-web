"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

function Challenge({ project }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Get the single media path and link from project data
  const mediaPath = project.gifImages[0];
  const mediaLink = project?.gifImagesLinks?.[0]; // New optional link field

  // Check if the file is a video (MP4)
  const isVideo = mediaPath && mediaPath.toLowerCase().endsWith(".mp4");

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    setVideoError(false);
  };

  const handleVideoError = () => {
    setVideoError(true);
    setVideoLoaded(false);
  };

  // Initialize WOW.js for animations
  useEffect(() => {
    if (typeof window !== "undefined" && window.WOW) {
      new window.WOW().init();
    }
  }, []);

  // Function to render media content (image or video) with optional link
  const renderMedia = () => {
    if (!imageError && !videoError && mediaPath) {
      const mediaContent = isVideo ? (
        <video
          src={mediaPath}
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          style={{
            opacity: videoLoaded ? 1 : 0.7,
            transition: "opacity 0.3s ease",
            width: "100%",
            height: "auto",
          }}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        />
      ) : (
        <Image
          src={mediaPath}
          alt={`${project?.title || "Project"} GIF`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          style={{
            opacity: imageLoaded ? 1 : 0.7,
            transition: "opacity 0.3s ease",
            width: "100%",
            height: "auto",
          }}
          width={800}
          height={600}
        />
      );

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
    }

    return (
      <div
        className="error-placeholder wow fadeInUp"
        data-wow-delay=".1s"
        style={{
          padding: "40px",
          textAlign: "center",
          backgroundColor: "#f5f5f5",
          borderRadius: "8px",
        }}
      >
        <p>Media file could not be loaded</p>
      </div>
    );
  };

  return (
    <section className="section-padding">
      <div className="container">
        <div className="section-padding pt-0">
          <div className="container">
            <div className="img md-mb30 wow fadeInUp" data-wow-delay=".1s">
              {renderMedia()}
            </div>
          </div>
        </div>
        <div
          className="info mb-80 pb-20 bord-thin-bottom wow fadeInUp"
          data-wow-delay=".2s"
        >
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="item mb-30">
                <span className="opacity-8 mb-5">Client:</span>
                <h6>{project.client}</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="item mb-30">
                <span className="opacity-8 mb-5">Services:</span>
                <h6>{project.services}</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="item mb-30">
                <span className="opacity-8 mb-5">Time:</span>
                <h6>{project.time}</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="item">
                <span className="opacity-8 mb-5">Category:</span>
                <h6>{project.category}</h6>
              </div>
            </div>
          </div>
        </div>
        <div
          className="row justify-content-center wow fadeInUp"
          data-wow-delay=".3s"
        >
          <div className="col-lg-11">
            <div className="row">
              <div className="col-lg-5">
                <h4 className="mb-50">The Challenge</h4>
              </div>
              <div className="col-lg-7">
                <div className="text">
                  <h5 className="mb-30 fw-400 line-height-40">
                    {project.content.overview}
                  </h5>
                  <p className="fz-18">
                    {project.content.challenge}
                    <br />
                    {/* <b>{project.content.rightsReserved}</b> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Challenge;
