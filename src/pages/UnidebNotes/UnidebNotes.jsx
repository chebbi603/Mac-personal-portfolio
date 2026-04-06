import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Preloader from "../../components/Preloader/preloader";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../CaseStudy/casestudy.css";
import UnidebSections from "./UnidebSection";
import Contact from "../../components/Contact/contact";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function UnidebNotes() {
  const container = React.useRef();

  useGSAP(() => {
    // Background color animation triggered by scroll
    gsap.fromTo(
      container.current,
      { backgroundColor: "#000000" },
      {
        backgroundColor: "#061611",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=1000",
          scrub: true,
        },
      }
    );
  }, { scope: container });

  return (
    <div className="case-container" ref={container}>
      <Navbar />
      <Preloader text1={"UNIDEB NOTES"} text2={""} />
      <UnidebSections />
      
      <div className="footer">
         <Contact />
      </div>
    </div>
  );
}
