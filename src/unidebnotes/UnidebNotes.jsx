import { Link } from "react-router-dom";
import Navbar from "../navbar/navbar";
import Preloader from "../preloader/preloader";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../case-study/casestudy.css";
import UnidebSections from "./UnidebSection";
import ScrollResetter from "../ScrollResetter/ScrollResetter";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);
ScrollTrigger.normalizeScroll(true);

export default function UnidebNotes() {
  useGSAP(() => {
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
            start: "top 90%",
            end: "top 70%",
            scrub: true,
          },
          y: 0,
          opacity: 1,
        }
      );
    });
  }, []);

  return (
    <div className="case-container">
      <Navbar />
      <Preloader text1={"UNIDEB NOTES"} text2={""} />
      <UnidebSections />
      <ScrollResetter />
    </div>
  );
}
