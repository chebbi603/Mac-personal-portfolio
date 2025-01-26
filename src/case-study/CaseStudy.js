import React, { useRef } from "react";
import ProjectsHeader from "../projects/projectsheader";
import "./casestudy.css";
import gsap from "gsap";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import Preloader from "../preloader/preloader";
import Sections from "./Section";
import { useGSAP } from "@gsap/react";
import Navbar from "../navbar/navbar";
import ScrollResetter from "../ScrollResetter/ScrollResetter";

function CaseStudy() {
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.normalizeScroll(true);

  const studyScope = useRef();
  useGSAP(
    () => {
      var studies = gsap.utils.toArray(".section-content");

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
              start: "top 80%",
              end: "top 60%",
              scrub: true,
            },
            y: 0,
            opacity: 1,
          }
        );
      });
    },
    { scope: studyScope }
  );

  ScrollTrigger.refresh();

  return (
    <div className="case-container" ref={studyScope}>
      <Navbar />
      <Preloader text1={"TUNISCOVERY"} text2={"UX CASE STUDY"} />
      <div className="darkness"></div>
      <ProjectsHeader id={2} />
      <Sections />
      <ScrollResetter />
    </div>
  );
}

export default CaseStudy;
