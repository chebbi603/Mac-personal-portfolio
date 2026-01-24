import React, { useRef, useState } from "react";
// import ProjectsHeader from "../../components/Projects/projectsheader";
import "./casestudy.css";
import gsap from "gsap";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import Preloader from "../../components/Preloader/preloader";
import Sections from "./Section";
import { useGSAP } from "@gsap/react";
import Navbar from "../../components/Navbar/navbar";

function CaseStudy() {
  const [preloaderFinished, setPreloaderFinished] = useState(false);
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
      <Preloader
        text1={"TUNISCOVERY"}
        text2={"UX CASE STUDY"}
        onLoadComplete={() => setPreloaderFinished(true)}
      />
      <div className="darkness"></div>
      <Sections />
    </div>
  );
}

export default CaseStudy;
