"use client";

import React, { useState, useEffect } from 'react';

function Works2({ project }) {
  const [imageLoaded1, setImageLoaded1] = useState(false);
  const [imageError1, setImageError1] = useState(false);
  const [videoLoaded1, setVideoLoaded1] = useState(false);
  const [videoError1, setVideoError1] = useState(false);
  const [collectionImages, setCollectionImages] = useState([]);
  const [imageStates, setImageStates] = useState({});
  const [videoStates, setVideoStates] = useState({});

  // Get image paths and links from project data - you can customize these property names
  const image1Path = project?.gifImages[2];
  const image1Link = project?.gifImagesLinks?.[2]; // New optional link field
  const isVideo1 = image1Path && image1Path.toLowerCase().endsWith('.mp4');
  const projectImages = project?.content?.images || [];

  // Initialize image and video states for collection images
  useEffect(() => {
    const initialImageStates = {};
    const initialVideoStates = {};
    projectImages.forEach((img, index) => {
      const isVid = img.url && img.url.toLowerCase().endsWith('.mp4');
      if (isVid) {
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
    setImageStates(prev => ({
      ...prev,
      [index]: { ...prev[index], loaded: true, error: false }
    }));
  };

  const handleCollectionImageError = (index) => {
    setImageStates(prev => ({
      ...prev,
      [index]: { ...prev[index], loaded: false, error: true }
    }));
  };

  const handleCollectionVideoLoad = (index) => {
    setVideoStates(prev => ({
      ...prev,
      [index]: { ...prev[index], loaded: true, error: false }
    }));
  };

  const handleCollectionVideoError = (index) => {
    setVideoStates(prev => ({
      ...prev,
      [index]: { ...prev[index], loaded: false, error: true }
    }));
  };

  // Initialize WOW.js for animations
  useEffect(() => {
    if (typeof window !== 'undefined' && window.WOW) {
      new window.WOW().init();
    }
  }, []);

  // Function to render media content (image or video) with optional link
  const renderMedia = (mediaPath, mediaLink, isVideo, onLoad, onError, altText, style = {}) => {
    if (!mediaPath) return null;

    const mediaContent = isVideo ? (
      <video
        src={mediaPath}
        onLoadedData={onLoad}
        onError={onError}
        style={{
          opacity: 1,
          transition: 'opacity 0.3s ease',
          width: '100%',
          height: 'auto',
          ...style
        }}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
      />
    ) : (
      <img
        src={mediaPath}
        alt={altText}
        onLoad={onLoad}
        onError={onError}
        style={{
          opacity: 1,
          transition: 'opacity 0.3s ease',
          width: '100%',
          height: 'auto',
          ...style
        }}
      />
    );

    // If there's a link, wrap the media in an anchor tag
    if (mediaLink) {
      return (
        <a 
          href={mediaLink} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'block', textDecoration: 'none' }}
        >
          {mediaContent}
        </a>
      );
    }

    return mediaContent;
  };

  return (
    <div className="section-padding pt-0 pb-0" style={{ marginBottom: '80px' }}>
          <div className="container">
            {/* Original single image or video */}
            <div className="img md-mb10 wow fadeInUp" data-wow-delay=".1s">
              {!imageError1 && !videoError1 && image1Path ? (
                renderMedia(
                  image1Path,
                  image1Link,
                  isVideo1,
                  isVideo1 ? handleVideo1Load : handleImage1Load,
                  isVideo1 ? handleVideo1Error : handleImage1Error,
                  `${project?.title || "Project"} work image 1`,
                  { marginBottom: '10px' }
                )
              ) : (
                <div className="error-placeholder" style={{
                  padding: '40px',
                  textAlign: 'center',
                  backgroundColor: '#f5f5f5',
                  borderRadius: '8px',
                  minHeight: '200px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <p>Media could not be loaded</p>
                </div>
              )}
            </div>
            {/* Collection of images or videos */}
            {projectImages.length > 0 && (
              <div className=''>
                {projectImages.map((image, index) => {
                  const isVid = image.url && image.url.toLowerCase().endsWith('.mp4');
                  const imageLink = image.link; // Check if individual images have links
                  return (
                    <div key={index} className="section-padding pt-0 pb-0">
                      <div className="img md-mb30 wow fadeInUp" data-wow-delay={`${0.2 + (index * 0.1)}s`}>
                        {isVid ? (
                          !videoStates[index]?.error ? (
                            <div className="collection-image-wrapper">
                              {renderMedia(
                                image.url,
                                imageLink,
                                true,
                                () => handleCollectionVideoLoad(index),
                                () => handleCollectionVideoError(index),
                                image.caption || `${project?.title || "Project"} video ${index + 1}`
                              )}
                              {image.caption && (
                                <div className="image-caption" style={{
                                  marginTop: '10px',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  color: '#666',
                                  fontStyle: 'italic'
                                }}>
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className="error-placeholder" style={{
                              padding: '40px',
                              textAlign: 'center',
                              backgroundColor: '#f5f5f5',
                              borderRadius: '8px',
                              minHeight: '200px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              <p>Media could not be loaded</p>
                            </div>
                          )
                        ) : (
                          !imageStates[index]?.error ? (
                            <div className="collection-image-wrapper">
                              {renderMedia(
                                image.url,
                                imageLink,
                                false,
                                () => handleCollectionImageLoad(index),
                                () => handleCollectionImageError(index),
                                image.caption || `${project?.title || "Project"} image ${index + 1}`
                              )}
                              {image.caption && (
                                <div className="image-caption" style={{
                                  marginTop: '10px',
                                  textAlign: 'center',
                                  fontSize: '14px',
                                  color: '#666',
                                  fontStyle: 'italic'
                                }}>
                                </div>
                              )}
                            </div>
                          ) : (
                            <div className="error-placeholder" style={{
                              padding: '40px',
                              textAlign: 'center',
                              backgroundColor: '#f5f5f5',
                              borderRadius: '8px',
                              minHeight: '200px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}>
                              <p>Media could not be loaded</p>
                            </div>
                          )
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
