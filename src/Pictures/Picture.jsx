import React, { useRef } from "react";
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

function Pictures({ line, both }) {
  const container = useRef();
  const q = gsap.utils.selector(container);

  useGSAP(() => {
    gsap.fromTo(
      q(".psec1"),
      {
        x: 200,
      },
      {
        scrollTrigger: {
          trigger: container.current,

          start: "top 100%",
          end: "bottom 0%",
          scrub: true,
        },

        x: -200,
      }
    );
    gsap.fromTo(
      q(".psec2"),
      {
        x: -200,
      },
      {
        scrollTrigger: {
          trigger: container.current,

          start: "top 100%",
          end: "bottom 0%",
          scrub: true,
        },

        x: 200,
      }
    );
  }, { scope: container });

  return (
    <div className="picture-container" ref={container}>
      {!both ? (
        <>
          {line === 1 ? (
            <div className="picture-section psec1">
              <img className="picture-img" src={img1} alt="Portfolio work 1" />
              <img className="picture-img" src={img2} alt="Portfolio work 2" />
              <img className="picture-img" src={img3} alt="Portfolio work 3" />
              <img className="picture-img" src={img6} alt="Portfolio work 6" />
              <img className="picture-img" src={img5} alt="Portfolio work 5" />
              <img className="picture-img" src={img4} alt="Portfolio work 4" />
            </div>
          ) : null}
          {line === 2 ? (
            <div className="picture-section psec2">
              <img className="picture-img" src={img7} alt="Portfolio work 7" />
              <img className="picture-img" src={img8} alt="Portfolio work 8" />
              <img className="picture-img" src={img9} alt="Portfolio work 9" />
              <img className="picture-img" src={img10} alt="Portfolio work 10" />
              <img className="picture-img" src={img11} alt="Portfolio work 11" />
              <img className="picture-img" src={img12} alt="Portfolio work 12" />
            </div>
          ) : null}
        </>
      ) : (
        <>
          <div className="picture-section psec1">
            <img className="picture-img" src={img1} alt="Portfolio work 1" />
            <img className="picture-img" src={img2} alt="Portfolio work 2" />
            <img className="picture-img" src={img3} alt="Portfolio work 3" />
            <img className="picture-img" src={img6} alt="Portfolio work 6" />
            <img className="picture-img" src={img5} alt="Portfolio work 5" />
            <img className="picture-img" src={img4} alt="Portfolio work 4" />
          </div>
          <div className="picture-section psec2">
            <img className="picture-img" src={img7} alt="Portfolio work 7" />
            <img className="picture-img" src={img8} alt="Portfolio work 8" />
            <img className="picture-img" src={img9} alt="Portfolio work 9" />
            <img className="picture-img" src={img10} alt="Portfolio work 10" />
            <img className="picture-img" src={img11} alt="Portfolio work 11" />
            <img className="picture-img" src={img12} alt="Portfolio work 12" />
          </div>
        </>
      )}
    </div>
  );
}

export default Pictures;
