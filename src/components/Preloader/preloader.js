import "./preloader.css";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef, useState, useEffect } from "react";
import { useContextAwareness } from "../../hooks/useContextAwareness";

gsap.registerPlugin(useGSAP);

function Preloader({ onLoadComplete }) {
  const preloaderContainer = useRef();
  const progressRef = useRef();
  const { preloaderText1, preloaderText2 } = useContextAwareness();
  const [loadProgress, setLoadProgress] = useState(0);

  // Track loading progress
  useEffect(() => {
    let totalAssets = 0;
    let loadedAssets = 0;

    const updateProgress = () => {
      loadedAssets++;
      const progress = totalAssets > 0 ? Math.round((loadedAssets / totalAssets) * 100) : 100;
      setLoadProgress(progress);
    };

    const images = document.querySelectorAll("img");
    totalAssets += images.length;
    images.forEach((img) => {
      if (img.complete) updateProgress();
      else {
        img.addEventListener("load", updateProgress);
        img.addEventListener("error", updateProgress);
      }
    });

    const videos = document.querySelectorAll("video");
    totalAssets += videos.length;
    videos.forEach((video) => {
      if (video.readyState >= 3) updateProgress();
      else {
        video.addEventListener("canplaythrough", updateProgress);
        video.addEventListener("error", updateProgress);
      }
    });

    totalAssets += 1;
    document.fonts.ready.then(updateProgress);

    if (totalAssets === 0) setLoadProgress(100);
  }, []);

  // Simple, elegant animations
  useGSAP(
    () => {
      const q = gsap.utils.selector(preloaderContainer);

      // IN: Simple fade + subtle rise
      gsap.fromTo(
        q(".preloader-content"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.2 }
      );
    },
    { scope: preloaderContainer }
  );

  // Animate progress bar
  useEffect(() => {
    if (progressRef.current) {
      gsap.to(progressRef.current, {
        scaleX: loadProgress / 100,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  }, [loadProgress]);

  // OUT animation when loaded
  useEffect(() => {
    if (loadProgress >= 100) {
      const q = gsap.utils.selector(preloaderContainer);

      gsap.to(q(".preloader-content"), {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: "power2.in",
        delay: 0.6,
      });

      gsap.to(preloaderContainer.current, {
        opacity: 0,
        duration: 0.5,
        delay: 0.9,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(preloaderContainer.current, { zIndex: -1 });
          if (onLoadComplete) onLoadComplete();
        },
      });
    }
  }, [loadProgress, onLoadComplete]);

  return (
    <div className="preloader-container" ref={preloaderContainer}>
      <div className="preloader-content">
        <div className="preloader-text">
          <p className="preloader-line-1">{preloaderText1}</p>
          <p className="preloader-line-2">{preloaderText2}</p>
        </div>
        <div className="preloader-progress">
          <div className="preloader-progress-fill" ref={progressRef}></div>
        </div>
      </div>
    </div>
  );
}

Preloader.propTypes = {
  onLoadComplete: PropTypes.func,
};

export default Preloader;
