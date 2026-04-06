import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Preloader from "../../components/Preloader/preloader";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../CaseStudy/casestudy.css";
import MENASYPSections from "./MENASYPSection";
import Contact from "../../components/Contact/contact";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

export default function MENASYP() {
  const container = React.useRef();

  useGSAP(() => {
    // Background color animation triggered by scroll
    gsap.fromTo(
      container.current,
      { backgroundColor: "#000000" },
      {
        backgroundColor: "#1B1123",
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
    <div className="mena-case-container" ref={container}>
      <Navbar />
      <Preloader text1={"IEEE R8 MENA SYP"} text2={"TUNISIA 2025"} />
      <MENASYPSections />
      
      <div className="footer">
         <Contact />
      </div>
    </div>
  );
}
