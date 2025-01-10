import img1 from "./assets/1.webp";
import img2 from "./assets/2.webp";
import img3 from "./assets/3.webp";
import img4 from "./assets/4.webp";
import img5 from "./assets/5.webp";
import img6 from "./assets/6.webp";
import img7 from "./assets/7.webp";
import img8 from "./assets/8.webp";
import img9 from "./assets/9.webp";
import img10 from "./assets/10.webp";
import img11 from "./assets/11.webp";
import img12 from "./assets/12.webp";

import "./pictures.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap-trial/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Pictures() {
  useGSAP(() => {
    gsap.fromTo(
      ".psec1",
      {
        x: 200,
      },
      {
        scrollTrigger: {
          trigger: ".picture-container",

          start: "top 100%",
          end: "bottom 0%",
          scrub: true,
        },

        x: -200,
      }
    );
    gsap.fromTo(
      ".psec2",
      {
        x: -200,
      },
      {
        scrollTrigger: {
          trigger: ".picture-container",

          start: "top 100%",
          end: "bottom 0%",
          scrub: true,
        },

        x: 200,
      }
    );
  });

  return (
    <div className="picture-container">
      <div className="picture-section psec1">
        <img className="picture-img" src={img1} />
        <img className="picture-img" src={img2} />
        <img className="picture-img" src={img3} />
        <img className="picture-img" src={img6} />
        <img className="picture-img" src={img5} />
        <img className="picture-img" src={img4} />
      </div>

      <div className="picture-section psec2">
        <img className="picture-img" src={img7} />
        <img className="picture-img" src={img8} />
        <img className="picture-img" src={img9} />
        <img className="picture-img" src={img10} />
        <img className="picture-img" src={img11} />
        <img className="picture-img" src={img12} />
      </div>
    </div>
  );
}

export default Pictures;
