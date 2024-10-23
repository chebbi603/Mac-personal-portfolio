import React from "react";
import ProjectsHeader from "../projects/projectsheader";
import "./casestudy.css";
import gsap from "gsap";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import Preloader from "../preloader/preloader";
import Sections from "./Section";

function CaseStudy() {
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.refresh();
  return (
    <div className="case-container">
      <Preloader id={2} />
      <div className="darkness"></div>
      <ProjectsHeader id={2} />
      <Sections />
    </div>
  );
}

export default CaseStudy;
