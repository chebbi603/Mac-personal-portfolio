import React, { useRef } from "react";
import ProjectsHeader from "../projects/projectsheader";
import "./casestudy.css";
import gsap from "gsap";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import Preloader from "../preloader/preloader";
import Sections from "./Section";
import { useGSAP } from "@gsap/react";
import Navbar from "../navbar/navbar";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function waitForWebsiteLoad() {
  return Promise.all([
    waitForImagesLoad(),
    //waitForFontsLoad()
  ]);
}

function waitForImagesLoad() {
  return new Promise((resolve) => {
    const images = document.querySelectorAll("img");
    const totalImages = images.length;
    let imagesLoaded = 0;

    function checkImagesLoaded() {
      imagesLoaded++;
      if (imagesLoaded === totalImages) {
        resolve();
      }
    }

    images.forEach((image) => {
      if (image.complete) {
        checkImagesLoaded();
      } else {
        image.addEventListener("load", checkImagesLoaded);
        image.addEventListener("error", checkImagesLoaded);
      }
    });
  });
}

function waitForFontsLoad() {
  return new Promise((resolve) => {
    document.fonts.ready.then(resolve);
  });
}

function CaseStudy() {
  const studyScope = useRef();
  useGSAP(
    () => {
      gsap.fromTo(
        ".preloader-content",
        {
          opacity: 0,
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
          delay: 0.5,
          ease: "elastic.out(1,3)",
          duration: 1,
        }
      );
      waitForFontsLoad().then(() => {
        ScrollTrigger.refresh();
      });

      waitForWebsiteLoad().then(() => {
        gsap.to(".preloader-content", {
          opacity: 0,
          y: 10,
          delay: 2,
          ease: "elastic.out(1,3)",
          duration: 0.25,
        });
        gsap.to(".preloader-container", {
          opacity: 0,
          scale: 1,
          ease: "elastic.out(1,3)",
          delay: 2,
          zIndex: -1,
          duration: 0.5,
        });

        ScrollTrigger.refresh();
      });

      gsap.fromTo(
        ".tuniscovery-text",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 2,
          delay: 2.5,
        }
      );
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
              start: "top 80%",
              end: "top 60%",
              scrub: true,
            },
            y: 0,
            opacity: 1,
          }
        );
      });

      gsap.fromTo(
        ".studycase-btn",
        {
          opacity: 0,
          y: 100,
        },
        {
          scrollTrigger: {
            trigger: ".studycase-btn",
            start: "top 100% bottom",
            scrub: true,
            end: "top 70%",
          },
          y: 0,
          delay: 2,
          opacity: 1,
        }
      );
      gsap.fromTo(
        ".studycase-btn",
        {
          opacity: 1,
          y: 0,
        },
        {
          scrollTrigger: {
            trigger: ".studycase-btn",
            start: "top 20%",
            end: "top 10%",
            scrub: true,
          },
          y: -10,
          opacity: 0,
        }
      );
    },
    { scope: studyScope }
  );

  ScrollTrigger.refresh();
  return (
    <div className="case-container" ref={studyScope}>
      <Navbar />
      <Preloader text1={"TUNISCOVERY"} text2={"UX CASE STUDY"} />
      <div className="darkness"></div>
      <ProjectsHeader id={2} />
      <Sections />
    </div>
  );
}

export default CaseStudy;
