import React, { useRef, useState } from "react";
// import ProjectsHeader from "../../components/Projects/projectsheader";
import "./casestudy.css";
import gsap from "gsap";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import Preloader from "../../components/Preloader/preloader";
import Sections from "./Section";
import { useGSAP } from "@gsap/react";
import Navbar from "../../components/Navbar/navbar";
import CaseStudyHeader from "./CaseStudyHeader";
import Contact from "../../components/Contact/contact";

function CaseStudy() {
  const [preloaderFinished, setPreloaderFinished] = useState(false);
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  const studyScope = useRef();
  
  useGSAP(() => {
    // Background color animation triggered by scroll
    gsap.fromTo(
      studyScope.current,
      { backgroundColor: "#000000" },
      {
        backgroundColor: "#010D1A",
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
        text1={"TUNISCOVERY"}
        text2={"UX CASE STUDY"}
        onLoadComplete={() => setPreloaderFinished(true)}
      />
      
      {/* <CaseStudyHeader startAnimation={preloaderFinished} /> */}
      <Sections />
      
      <div className="footer">
         <Contact />
      </div>

    </div>
  );
}

export default CaseStudy;
