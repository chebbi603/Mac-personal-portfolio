import React, { useRef, useState } from "react";
import "../CaseStudy/casestudy.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { setupScrollTrigger } from "../../utils/scroll";
import Preloader from "../../components/Preloader/preloader";
import DSAIInfraSection from "./DSAIInfraSection";
import { useGSAP } from "@gsap/react";
import Navbar from "../../components/Navbar/navbar";
import Contact from "../../components/Contact/contact";

function DSAIInfra() {
  const [preloaderFinished, setPreloaderFinished] = useState(false);
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  setupScrollTrigger();

  const studyScope = useRef();
  
  useGSAP(() => {
    // Background color animation triggered by scroll
    gsap.fromTo(
      studyScope.current,
      { backgroundColor: "#000000" },
      {
        backgroundColor: "#011627",
        scrollTrigger: {
          trigger: studyScope.current,
          start: "top top",
          end: "+=1000",
          scrub: true,
        },
      }
    );
  }, { scope: studyScope });

  return (
    <div className="case-container" ref={studyScope}>
      <Navbar />
      <Preloader
        text1={"DS AI INFRA"}
        text2={"CASE STUDY"}
        onLoadComplete={() => setPreloaderFinished(true)}
      />
      <DSAIInfraSection />
      <div className="footer">
         <Contact />
      </div>
    </div>
  );
}

export default DSAIInfra;
