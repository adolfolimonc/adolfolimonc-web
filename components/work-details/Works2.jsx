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

  // Get image paths from project data - you can customize these property names
  const image1Path = project?.gifImages[2];
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

  return (
    <div className="section-padding pt-0 pb-0" style={{ marginBottom: '80px' }}>
          <div className="container">
            {/* Original single image or video */}
            <div className="img md-mb30 wow fadeInUp" data-wow-delay=".1s">
              {!imageError1 && !videoError1 && image1Path ? (
                isVideo1 ? (
                  <video
                    src={image1Path}
                    onLoadedData={handleVideo1Load}
                    onError={handleVideo1Error}
                    style={{
                      opacity: videoLoaded1 ? 1 : 1,
                      transition: 'opacity 0.3s ease',
                      width: '100%',
                      height: 'auto'
                    }}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls={false}
                  />
                ) : (
                  <img
                    src={image1Path}
                    alt={`${project?.title || "Project"} work image 1`}
                    onLoad={handleImage1Load}
                    onError={handleImage1Error}
                    style={{
                      opacity: imageLoaded1 ? 1 : 1,
                      transition: 'opacity 0.3s ease',
                      width: '100%',
                      height: 'auto'
                    }}
                  />
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
                  return (
                    <div key={index} className="section-padding pt-0 pb-0">
                      <div className="img md-mb30 wow fadeInUp" data-wow-delay={`${0.2 + (index * 0.1)}s`}>
                        {isVid ? (
                          !videoStates[index]?.error ? (
                            <div className="collection-image-wrapper">
                              <video
                                src={image.url}
                                alt={image.caption || `${project?.title || "Project"} video ${index + 1}`}
                                onLoadedData={() => handleCollectionVideoLoad(index)}
                                onError={() => handleCollectionVideoError(index)}
                                style={{
                                  opacity: videoStates[index]?.loaded ? 1 : 1,
                                  transition: 'opacity 0.3s ease',
                                  width: '100%',
                                  height: 'auto'
                                }}
                                autoPlay
                                muted
                                loop
                                playsInline
                                controls={false}
                              />
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
                              <img
                                src={image.url}
                                alt={image.caption || `${project?.title || "Project"} image ${index + 1}`}
                                onLoad={() => handleCollectionImageLoad(index)}
                                onError={() => handleCollectionImageError(index)}
                                style={{
                                  opacity: imageStates[index]?.loaded ? 1 : 1,
                                  transition: 'opacity 0.3s ease',
                                  width: '100%',
                                  height: 'auto'
                                }}
                              />
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
