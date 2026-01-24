import { useRef } from "react";
import "./CaseStudies.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import { IconArrowUpRight } from "@tabler/icons-react";
import { useCursor } from "../../context/CursorContext";

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

// (projects array remains same...)

function CaseStudyCard({ project }) {
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const { setCursor, resetCursor } = useCursor();

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
    setCursor({ 
      type: "custom", 
      text: project.external ? "Visit Instagram" : "View Case Study", 
      icon: IconArrowUpRight 
    });
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    resetCursor();
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
        preload="metadata"
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
    className: "casestudy-card",
    ref: cardRef,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  };
  
  if (project.external) {
    return (
      <a href={project.path} target="_blank" rel="noreferrer" {...commonProps}>
        {CardContent}
      </a>
    );
  }

  return (
    <Link to={project.path} {...commonProps}>
      {CardContent}
    </Link>
  );
}

export default function CaseStudies() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Animate entire grid as one unit
    const grid = containerRef.current.querySelector(".casestudies-grid");
    
    gsap.fromTo(grid, 
      { 
        y: 100,
        scale: 0.9,
        filter: "blur(20px)", 
        autoAlpha: 0 
      },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 100%", // Start as soon as it enters viewport
          end: "top 50%", // Finish when near top
          scrub: 1 // Smooth scrub
        },
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        autoAlpha: 1,
        ease: "none" // Linear ease for scrub usually better, or keeping expo is fine? scrub maps to scroll. linear is best for direct control.
      }
    );


  }, { scope: containerRef });

  return (
    <div className="casestudies-container" ref={containerRef}>
      <div className="casestudies-grid">
        {projects.map((p) => (
          <CaseStudyCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}

