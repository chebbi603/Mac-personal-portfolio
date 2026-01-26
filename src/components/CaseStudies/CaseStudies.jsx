import { useRef } from "react";
import "./CaseStudies.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { IconArrowUpRight } from "@tabler/icons-react";
import { useTransitionNavigate } from "../../hooks/useTransitionNavigate";

import { useState, useEffect } from "react";
// Import Videos
import tuniscoveryVid from "../../pages/Projects/hack4tourism/tuniscovery.webm";
import twoamVid from "../../pages/Projects/2am/2am.webm";
import unidebVid from "../../pages/Projects/unidebnotes/unidebnotes.webm";
// MENASYP video is in public folder
const menasypVid = "/menasyp_mobile_optimized.mp4";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "IEEE R8 MENA SYP 2025",
    type: "BRANDING - GRAPHIC DESIGN",
    description: "The IEEE R8 MENA SYP is a student congress that aims to inspire future leaders from 17+ countries",
    video: menasypVid,
    path: "/menasyp25",
    external: false,
    color: "#85122e"
  },
  {
    id: 2,
    title: "Tuniscovery",
    type: "UX/UI DESIGN",
    description: "Tuniscovery is a mobile application that serves as the ultimate gateway for every tourist visiting Tunisia.",
    video: tuniscoveryVid,
    path: "/tuniscovery",
    external: false,
    color: "#01384f"
  },
  {
    id: 3,
    title: "Two AM Production",
    type: "CONTENT CREATION",
    description: "Ahmed, Ayoub, and Malek working on cool videos. Engineering, Content Creation, and Technology.",
    video: twoamVid,
    path: "https://www.instagram.com/two_am_prod/",
    external: true,
    color: "#3d348b"
  },
  {
    id: 4,
    title: "UNIDEB Notes",
    type: "UX/UI DESIGN - DEV",
    description: "A place for University of Debrecen students to share their lecture notes and study materials.",
    video: unidebVid,
    path: "/unidebnotes",
    external: false,
    color: "#297058"
  }
];


function CaseStudyCard({ project }) {
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const transitionTo = useTransitionNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check initial width
    const checkMobile = () => setIsMobile(window.innerWidth < 900);
    checkMobile();
    
    // Add listener
    window.addEventListener('resize', checkMobile);
    
    // On mobile, try to play immediately
    if (window.innerWidth < 900 && videoRef.current) {
        videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
    }

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Use simple mouse events just for the video play/pause on Desktop
  const handleMouseEnter = () => {
    if (!isMobile && videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile && videoRef.current) {
      videoRef.current.pause();
    }
  };

  const CardContent = (
    <>
      <video
        ref={videoRef}
        className="casestudy-video"
        src={project.video}
        muted
        loop
        playsInline
        autoPlay={isMobile} // Only autoplay property on mobile
        preload="metadata" // Metadata is enough since we might not play immediately on desktop
      />
      {/* Dynamic gradient color passed via style */}
      <div 
        className="casestudy-overlay"
        style={{ "--hover-color": project.color }}
      ></div>
      <div className="casestudy-content">
        <p className="casestudy-type">{project.type}</p>
        <h3 className="casestudy-title">{project.title}</h3>
        <p className="casestudy-description">{project.description}</p>
      </div>
    </>
  );

  const commonProps = {
    className: "casestudy-card no-snap", // no-snap handled by new cursor logic automatically if custom is present
    ref: cardRef,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    // Data Attributes for the new Cursor System
    "data-cursor": "custom",
    "data-cursor-text": project.external ? "VISIT INSTAGRAM" : "VIEW CASE STUDY",
    "data-cursor-icon": "arrow-up-right"
  };
  
  if (project.external) {
    return (
      <a href={project.path} target="_blank" rel="noreferrer" {...commonProps}>
        {CardContent}
      </a>
    );
  }

  return (
    <div 
      onClick={() => transitionTo(project.path)}
      {...commonProps} 
      style={{ cursor: "pointer" }} // Ensure it looks clickable
    >
      {CardContent}
    </div>
  );
}

export default function CaseStudies() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(() => {
    // Animate entire grid as one unit
    const grid = containerRef.current.querySelector(".casestudies-grid");
    
    const mm = gsap.matchMedia();
    mm.add(
      {
        isDesktop: "(min-width: 900px)",
        isMobile: "(max-width: 899px)",
      },
      (context) => {
        let { isMobile } = context.conditions;

        gsap.fromTo(grid, 
          { 
            y: isMobile ? 50 : 100, // Less movement on mobile
            scale: isMobile ? 0.95 : 0.9,
            filter: "blur(20px)", 
            autoAlpha: 0 
          },
          {
            scrollTrigger: {
              trigger: containerRef.current,
              start: isMobile ? "top 85%" : "top 100%", // Earlier on mobile
              end: "top 50%", 
              scrub: 1 
            },
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            autoAlpha: 1,
            ease: "none" 
          }
        );
      }
    );

    // Parallax title animation - scrolls slower and blurs when overlapped
    if (titleRef.current) {
      gsap.to(titleRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
          end: "top -20%",
          scrub: true,
        },
        y: 150,
        filter: "blur(20px)",
        opacity: 0,
        ease: "none",
      });
    }


  }, { scope: containerRef });

  return (
    <div className="casestudies-container" ref={containerRef}>
      <h2 className="casestudies-title" ref={titleRef}>Work</h2>
      <div className="casestudies-grid">
        {projects.map((p) => (
          <CaseStudyCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}

