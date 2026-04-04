import React, { useRef } from "react";
import "./casestudyheader.css";
import ProgressiveImage from "../../components/ui/ProgressiveImage";
import tuniscoveryheader from "../../assets/tuniscovery-header.png";
import headercomp from "../../assets/projectsheader_c.webp";
import MediaQuery from "react-responsive";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function CaseStudyHeader({ startAnimation }) {
  const containerScope = useRef();

  useGSAP(
    () => {
      if (!startAnimation) return;

      gsap.fromTo(
        ".tuniscovery-text",
        { opacity: 0 },
        { opacity: 1, duration: 2, delay: 2.5 }
      );

      ScrollTrigger.refresh();

      gsap.to(".tuniscovery-text", {
        scrollTrigger: {
          trigger: ".projectsheader-content",
          start: "top 40% bottom 10%",
          end: "bottom 30%",
          scrub: true,
        },
        y: 600,
        zIndex: 5,
      });

      const animateImage = (selector, startClip, endClip) => {
        if (document.querySelector(selector)) {
          gsap.fromTo(
            selector,
            { clipPath: startClip },
            {
              scrollTrigger: {
                trigger: selector,
                start: "top 80%",
                end: "bottom 15%",
                scrub: true,
              },
              clipPath: endClip,
            }
          );
        }
      };

      animateImage(
        ".projectsheader-image",
        "polygon(30% 10%, 70% 10%, 70% 90%, 30% 90%)",
        "polygon(5% 10%, 95% 10%, 95% 90%, 5% 90%)"
      );
      animateImage(
        ".projectsheader-image-mobile",
        "polygon(45% 40%, 55% 40%, 55% 60%, 45% 60%)",
        "polygon(37% 0%, 63% 0%, 63% 100%, 37% 100%)"
      );
    },
    { scope: containerScope, dependencies: [startAnimation] }
  );

  return (
    <div className="projectsheader-container" ref={containerScope}>
      <div className="projectsheader-content">
        <p className="projheader-myloc">UX Case Study</p>
        <div className="tuniscovery-text">
          <MediaQuery query="(min-device-width: 1000px)">
            <p className="projectsheader-title">TUNISCOVERY</p>
          </MediaQuery>
          <MediaQuery query="(max-device-width: 1000px)">
            <p className="projectsheader-title-mobile">Tuniscovery</p>
          </MediaQuery>
        </div>
        <div className="projectsheader-imagecontainer">
          <MediaQuery query="(min-device-width: 1000px)">
            <ProgressiveImage
              src={tuniscoveryheader}
              placeholder={headercomp}
              mobile={false}
              alt="prjhdrimg"
            />
          </MediaQuery>
          <MediaQuery query="(max-device-width: 1000px)">
            <ProgressiveImage
              src={tuniscoveryheader}
              placeholder={headercomp}
              mobile={true}
              alt="prjhdrimg"
            />
          </MediaQuery>
        </div>
      </div>
    </div>
  );
}
