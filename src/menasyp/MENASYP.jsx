import React from "react";
import Navbar from "../navbar/navbar";
import Preloader from "../preloader/preloader";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../case-study/casestudy.css";
import MENASYPSections from "./MENASYPSection";
import ScrollResetter from "../ScrollResetter/ScrollResetter";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
ScrollTrigger.normalizeScroll(true);

export default function MENASYP() {
  const container = React.useRef();
  const q = gsap.utils.selector(container);

  useGSAP(() => {
    var studies = gsap.utils.toArray(q(".section-content"));

    studies.forEach((content, index) => {
      gsap.fromTo(
        content,
        {
          opacity: 0,
          y: 100,
        },
        {
          scrollTrigger: {
            trigger: content,
            start: "top 90%",
            end: "top 70%",
            scrub: true,
          },
          y: 0,
          opacity: 1,
        }
      );
    });

    // Background color animation triggered by scroll
    // Note: .mena-case-container is the root, so we animate the container ref directly or use scope
    // Since we want to animate the background of this container based on .video-container scroll
    // We should keep the trigger relative to the viewport/scroll but scope the target if possible.
    // However, .video-container needs to be inside this component or globally accessible.
    // Assuming .video-container is inside MENASYPSections which is inside this div.
    
    // Check if .video-container is findable within this scope?
    // It seems MENASYPSections renders children.
    // Ideally we should use the ref for the target.
    
    gsap.fromTo(
      container.current,
      {
        backgroundColor: "#000000",
      },
      {
        backgroundColor: "#1B1123",
        scrollTrigger: {
          trigger: q(".video-container"), // Try to find it inside scope
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, { scope: container });

  return (
    <div className="mena-case-container" ref={container}>
      <Navbar />
      <Preloader text1={"IEEE R8 MENA SYP"} text2={"TUNISIA 2025"} />
      <MENASYPSections />
      <ScrollResetter />
    </div>
  );
}
