import { Link } from "react-router-dom";
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

    // Background color animation triggered by scroll
    gsap.fromTo(
      ".mena-case-container",
      {
        backgroundColor: "#000000",
      },
      {
        backgroundColor: "#1B1123",
        scrollTrigger: {
          trigger: ".video-container",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="mena-case-container">
      <Navbar />
      <Preloader text1={"IEEE R8 MENA SYP"} text2={"TUNISIA 2025"} />
      <MENASYPSections />
      <ScrollResetter />
    </div>
  );
}
