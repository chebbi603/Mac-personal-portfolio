import img1 from "./assets/logo1.svg";
import img2 from "./assets/logo2.svg";
import img4 from "./assets/logo4.svg";
import img5 from "./assets/logo5.svg";
import img6 from "./assets/logo6.svg";

import img_bmw from "./assets/bmw.svg";

import "./companies.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap-trial/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
function Companies() {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(
      {
        isDesktop: "(min-width: 900px)",
        isMobile: "(max-width: 899px)",
      },
      (context) => {
        let { isMobile } = context.conditions;

        gsap.fromTo(
          ".company-img",
          {
            translateY: isMobile ? 20 : -40, // Less movement on mobile
            autoAlpha: 0,
            filter: "blur(20px)",
          },
          {
            scrollTrigger: {
              trigger: ".company-container",
              start: "top 85%", // Trigger earlier on mobile
            },
            stagger: isMobile ? 0.02 : 0.05, // Faster stagger on mobile
            translateY: 0,
            autoAlpha: 1,
            filter: "blur(0px)",
            duration: 0.5,
            ease: "power1.out",
          }
        );
      }
    );
  });

  return (
    <div className="company-container">
      <div className="company-section logsec">
        <img className="company-img" src={img_bmw} alt="BMW Group" />
        <img className="company-img" src={img1} alt="Company logo 1" />
        <img className="company-img" src={img2} alt="Company logo 2" />
        <img className="company-img" src={img4} alt="Company logo 4" />
        <img className="company-img" src={img6} alt="Company logo 6" />
        <img className="company-img" src={img5} alt="Company logo 5" />
      </div>
    </div>
  );
}

export default Companies;
