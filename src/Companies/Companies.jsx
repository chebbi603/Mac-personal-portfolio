import img1 from "./assets/logo1.svg";
import img2 from "./assets/logo2.svg";
import img3 from "./assets/logo3.svg";
import img4 from "./assets/logo4.svg";
import img5 from "./assets/logo5.svg";
import img6 from "./assets/logo6.svg";

import "./companies.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap-trial/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
function Companies() {
  useGSAP(() => {
    gsap.fromTo(
      ".company-img",
      {
        y: -40,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: ".company-title",
          start: "top 50%",
        },
        stagger: 0.2,
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
      }
    );
  });

  return (
    <div className="company-container">
      <p className="company-title">BRANDS I HAVE WORKED FOR</p>
      <div className="company-section logsec">
        <img className="company-img" src={img1} />
        <img className="company-img" src={img2} />
        <img className="company-img" src={img4} />
        <img className="company-img" src={img6} />
        <img className="company-img" src={img5} />
        <img className="company-img" src={img3} />
      </div>
    </div>
  );
}

export default Companies;
