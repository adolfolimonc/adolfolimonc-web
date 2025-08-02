"use client";

import React, { useState, useEffect } from 'react';

function Works({ project }) {
  const [imageLoaded1, setImageLoaded1] = useState(false);
  const [imageError1, setImageError1] = useState(false);

  // Get image paths from project data - you can customize these property names
  const image1Path = project?.gifImages[1];

  const handleImage1Load = () => {
    setImageLoaded1(true);
    setImageError1(false);
  };

  const handleImage1Error = () => {
    setImageError1(true);
    setImageLoaded1(false);
  };

  // Initialize WOW.js for animations
  useEffect(() => {
    if (typeof window !== 'undefined' && window.WOW) {
      new window.WOW().init();
    }
  }, []);

  return (
    <div className="">
      <div className="container">
        <div className="">
          <div className="container">
            <div className="img md-mb30 wow fadeInUp" data-wow-delay=".1s">
              {!imageError1 ? (
                <img 
                  src={image1Path} 
                  alt={`${project?.title || "Project"} work image 1`}
                  onLoad={handleImage1Load}
                  onError={handleImage1Error}
                  style={{ 
                    opacity: imageLoaded1 ? 1 : 0.7,
                    transition: 'opacity 0.3s ease',
                    width: '100%',
                    height: 'auto'
                  }}
                />
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
                  <p>Image could not be loaded</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
