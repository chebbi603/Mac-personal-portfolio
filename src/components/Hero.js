import "../home.css";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IconArrowDown } from "@tabler/icons-react";
import video1 from "../assets/herovideo.webm"; // Importing the video
import ScrollTrigger from "gsap/ScrollTrigger"; // Ensure ScrollTrigger is imported if used directly, though widely registered in App

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Hero({ startAnimation }) {
  const container = useRef();
  const videoWrapper = useRef();
  const videoRef = useRef();
  const [videoLoaded, setVideoLoaded] = useState(false);
  const q = gsap.utils.selector(container);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    videoRef.current.play();
  };

  useGSAP(
    () => {
      // Immediately set initial state to avoid FOUC of text before preloader finishes
      gsap.set(q(".char"), { y: 100, opacity: 0, filter: "blur(10px)" });
      gsap.set(q(".esm-anim-secondary"), { y: 20, opacity: 0 });

      if (!startAnimation) return;

      const tl = gsap.timeline();

      // 1. Title Characters Animation (Staggered, Blur, From Bottom)
      tl.to( // Changing fromTo -> to because we set start values above
        q(".char"),
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.05,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.5, // Wait a bit for video load or general smoothness
        }
      );

      // 2. Secondary Elements (Description, Mentions, Arrow) - Fade in after title
      tl.to(
        q(".esm-anim-secondary"),
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.4" // Overlap slightly with title end
      );

      // Scroll Animation: Pin and Zoom Out Video
      const mm = gsap.matchMedia();

      mm.add({
        // Desktop
        isDesktop: "(min-width: 800px)",
        // Mobile
        isMobile: "(max-width: 799px)",
      }, (context) => {
        let { isMobile } = context.conditions;

        // Define scale based on device
        // Mobile: Less zoom out (0.9) to preserve vertical height space
        // Desktop: Standard zoom out (0.8)
        const targetScale = isMobile ? 0.95 : 0.8;

        const t1 = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        // Mobile-specific animation tweaking
        if (isMobile) {
          t1.fromTo(
            videoWrapper.current,
            {
              scale: 1,
              borderRadius: "0px",
              y: 0,
            },
            {
              scale: 1, // Don't scale down on mobile to avoid whitespace issues
              borderRadius: "0px",
              y: 50, // Gentle parallax
              ease: "none",
            }
          )
            .to(
              q(".hero-text-overlay"),
              {
                y: -50, // Move text up slightly
                opacity: 0,
                ease: "none"
              },
              "<"
            );
        } else {
          // Desktop Animation (Original)
          t1.fromTo(
            videoWrapper.current,
            {
              scale: 1,
              borderRadius: "0px",
              y: 0,
            },
            {
              scale: targetScale,
              borderRadius: "0px",
              y: 200,
              ease: "none",
            }
          )
            .to(
              q(".hero-text-overlay"),
              {
                opacity: 0,
                filter: "blur(10px)",
                ease: "none",
              },
              "<"
            );
        }
      });

      // Force refresh to ensure start/end positions of downstream triggers are recalculated
      // taking the new Hero pin spacer into account.
      ScrollTrigger.refresh();

    },
    { scope: container, dependencies: [startAnimation] }
  );

  // Helper to split text into chars
  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="char" style={{ display: "inline-block" }}>
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <div className="home" ref={container}>
      {/* Video Background Layer */}
      <div className="hero-video-wrapper" ref={videoWrapper}>

        {/* Video (Fades in when loaded) */}
        <video
          ref={videoRef}
          className={`hero-video ${videoLoaded ? "video-visible" : "video-hidden"}`}
          src={video1}
          muted
          loop
          playsInline
          onLoadedData={handleVideoLoad}
        />
        <div className="hero-video-dark-overlay"></div>

        {/* Content Overlay (Now inside wrapper to scale with it) */}
        <div className="hero-text-overlay">
          <div className="esmi-center">

            {/* Main Text - Split into Chars */}
            <h1 className="hero-main-text">
              {splitText("ENGINEERING")}
            </h1>
            <h1 className="hero-main-text">
              {splitText("INTERFACES")}
            </h1>
            <h1 className="hero-main-text">
              {splitText("THAT THINK")}
            </h1>

            {/* Description */}
            <p className="hero-desc-text esm-anim-secondary">
              MY NAME IS MOHAMED AYOUB 👋
              <br />My work is about Bridging the gap between<br />Human-Centric Design and AI-Driven Engineering
            </p>
            {/* Small header/availability */}
            <div className="mentions-l esm-anim-secondary">
              <div className="available-icn"></div>
              <a
                className="mentions_txt"
                target="_blank" rel="noreferrer"
                href="https://www.upwork.com/freelancers/ayoubc4"
              >
                AVAILABLE FOR PROJECTS
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="arrow esm-anim-secondary">
        <IconArrowDown color="white" size={32} />
      </div>
    </div>
  );
}

export default Hero;
