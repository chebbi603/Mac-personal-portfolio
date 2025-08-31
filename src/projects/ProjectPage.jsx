import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./project.css";
import Preloader from "../preloader/preloader";
import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";
import tuniscovery from "./hack4tourism/tuniscovery.webm";
import twoam from "./2am/2am.webm";
import ScrollTrigger from "gsap/ScrollTrigger";
import Contact from "../contact/contact";
import { useRef } from "react";
import Pictures from "../Pictures/Picture";
import unideb from "./unidebnotes/unidebnotes.webm";
// import mena from "../menasyp/assets/menasyp_with_audio.webm";
import { IconArrowDownLeft } from "@tabler/icons-react";
import ScrollResetter from "../ScrollResetter/ScrollResetter";
const mena = "/menasyp_mobile_optimized.mp4";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.normalizeScroll(true);

function ProjectItem({ tag }) {
  return (
    <Link to={tag.path}>
      <div className="project-item" style={{ backgroundColor: tag.color }}>
        <div className="project-item-text-container">
          <div className="project-item-info">
            <p className="project-item-info-text">{tag.type}</p>

            <p className="project-item-info-text">{tag.year}</p>
          </div>

          <div className="project-separator"></div>
          <h2 className="project-item-name">{tag.name}</h2>
          <p className="project-item-description">{tag.description}</p>
        </div>
        {tag.video ? (
          <video
            className="project-item-image"
            src={tag.image}
            alt={tag.name}
            autoPlay
            muted
            loop
            preload="metadata"
            playsInline
            webkit-playsinline="true"
          />
        ) : (
          <img className="project-item-image" src={tag.image} alt={tag.name} />
        )}
      </div>
    </Link>
  );
}

export default function ProjectPage() {
  const projectScope = useRef(null);
  useGSAP(
    () => {
      ScrollTrigger.refresh();
      var items = gsap.utils.toArray(".project-item");
      items.forEach((content, index) => {
        gsap.fromTo(
          content,
          {
            y: 0,
          },
          {
            scrollTrigger: {
              trigger: content,
              start: "top 25%",
              endTrigger: ".project-item-container",
              end: "bottom 10%",
              pin: content,
              pinSpacing: false,
              scrub: true,
            },
            y: -150,
            ease: "power1.out",
            scale: 0.9,
          }
        );
      });
      gsap.to(".project-page-container", {
        backgroundColor: "black",
        duration: 0.5,
      });
      gsap.fromTo(
        ".project-page-footer",
        {
          autoAlpha: 0,
          scale: 0.9,
        },
        {
          scrollTrigger: {
            trigger: ".project-page-footer",
            start: "top 70%",
            end: "bottom bottom",
            scrub: true,
          },
          autoAlpha: 1,
          scale: 1,
        }
      );
    },
    { scope: projectScope }
  );
  return (
    <div ref={projectScope} className="project-page-container">
      <Preloader text1={"PROJECTS"} />
      <Navbar />
      <div className="project-page">
        <div className="project-page-header">
          <h1 className="project-page-title">FEATURED PROJECTS</h1>
          <IconArrowDownLeft size={64} color="white" />
        </div>
        <div className="project-item-container">
          <ProjectItem
            tag={{
              color: "#FF2057",
              name: "IEEE R8 MENA SYP 2025",
              path: "/menasyp25",
              video: true,
              type: "BRANDING - GRAPHIC DESIGN",
              year: "2022",
              description:
                "The IEEE R8 MENA SYP is a student congress that aims to inspire future leaders from 17+ countries",
              image: mena,
            }}
          />
          <ProjectItem
            tag={{
              name: "Tuniscovery",
              path: "/tuniscovery",
              color: "#124559",
              year: "2024",
              type: "UX/UI DESIGN",
              video: true,
              description:
                "Tuniscovery is a mobile application that serves as the ultimate gateway for every tourist vising Tunisia.",
              image: tuniscovery,
            }}
          />
          <ProjectItem
            tag={{
              color: "#3d348b",
              name: "Two AM Production",
              path: "https://www.instagram.com/two_am_prod/",
              type: "CONTENT CREATION",
              year: "2024",
              video: true,
              description:
                "Ahmed, Ayoub, and Malek working on cool videos. Engineering, Content Creation,Technology, and more.",
              image: twoam,
            }}
          />
          <ProjectItem
            tag={{
              color: "#297058",
              name: "UNIDEB Notes",
              path: "/unidebnotes",
              video: true,
              type: "UX/UI DESIGN - FRONTEND DEVELOPMENT",
              year: "2024",
              description:
                "A place for University of Debrecen students to share their lecture notes and study materials.",
              image: unideb,
            }}
          />
        </div>
      </div>
      <div className="project-page-dribbble-container">
        <Pictures line={2} both={false} />
        <h3 className="project-page-dribbble-title">
          EXPLORE MORE ON DRIBBBLE
        </h3>
        <a
          href="https://www.dribbble.com/chebbimedayoub"
          target="_blank"
          className="project-button"
        >
          LET'S CHECK IT OUT
        </a>
        <Pictures line={1} both={false} />
      </div>
      <div className="project-page-footer">
        <Contact />
      </div>
      <ScrollResetter />
    </div>
  );
}
