import React, { useRef, useState } from "react";
import "../CaseStudy/casestudy.css";
import gsap from "gsap";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import Preloader from "../../components/Preloader/preloader";
import DSAIInfraSection from "./DSAIInfraSection";
import { useGSAP } from "@gsap/react";
import Navbar from "../../components/Navbar/navbar";

function DSAIInfra() {
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
        text1={"DS AI INFRA"}
        text2={"CASE STUDY"}
        onLoadComplete={() => setPreloaderFinished(true)}
      />
      <DSAIInfraSection />
    </div>
  );
}

export default DSAIInfra;
