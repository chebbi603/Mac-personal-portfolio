import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './casestudy.css';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVideoComponent({ frameCount = 174, framePrefix = 'frame_', frameExtension = 'jpg' }) {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const [currentFrame, setCurrentFrame] = useState(1);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imageCache = useRef({});

  // Preload images for smooth scrolling
  useEffect(() => {
    const preloadImages = async () => {
      const promises = [];
      for (let i = 1; i <= frameCount; i++) {
        const frameNumber = i.toString().padStart(3, '0');
        // Use public folder path for static assets
        const imagePath = `/menasyp-frames/${framePrefix}${frameNumber}.${frameExtension}`;
        
        const promise = new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            imageCache.current[i] = imagePath;
            resolve();
          };
          img.onerror = reject;
          img.src = imagePath;
        });
        promises.push(promise);
      }
      
      try {
        await Promise.all(promises);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        setImagesLoaded(true); // Continue even if some images fail
      }
    };

    preloadImages();
  }, [frameCount, framePrefix, frameExtension]);

  useEffect(() => {
    if (!imagesLoaded) return;

    const container = containerRef.current;
    if (!container) return;

    // GSAP ScrollTrigger animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          // Calculate which frame to show based on scroll progress
          const progress = self.progress;
          const frameIndex = Math.min(
            Math.floor(progress * frameCount) + 1,
            frameCount
          );
          setCurrentFrame(frameIndex);
        },
      },
    });

    // Scale and position animation
    tl.fromTo(
      imageRef.current,
      {
        scale: 0.7,
        y: 110,
      },
      {
        scale: 1,
        y: 100,
        duration: 1,
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [imagesLoaded, frameCount]);

  const getCurrentImageSrc = () => {
    if (!imagesLoaded || !imageCache.current[currentFrame]) {
      // Return first frame as fallback
      const frameNumber = '001';
      return `/menasyp-frames/${framePrefix}${frameNumber}.${frameExtension}`;
    }
    return imageCache.current[currentFrame];
  };

  return (
    <div className="section-content video-container" ref={containerRef}>
      <img
        ref={imageRef}
        className="video-file"
        src={getCurrentImageSrc()}
        alt={`Frame ${currentFrame}`}
        style={{
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
        }}
      />
      {!imagesLoaded && (
        <div className="loading-indicator" style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'white',
          fontSize: '18px',
          fontFamily: 'DM Sans, sans-serif'
        }}>
          Loading frames...
        </div>
      )}
    </div>
  );
}