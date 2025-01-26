import "./preloader.css";
import PropTypes from "prop-types";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import logosmall from "../assets/logo_small.svg";

gsap.registerPlugin(useGSAP);

function TextProvider({ text1, text2 }) {
  return (
    <>
      <p className="preloader-title">
        {text1}
        <br /> {text2}
      </p>
    </>
  );
}

function waitForWebsiteLoad() {
  return Promise.all([waitForImagesLoad(), waitForFontsLoad()]);
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

function Preloader({ text1, text2 }) {
  const preloaderContainer = useRef();
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
      });
    },
    { scope: preloaderContainer }
  );

  return (
    <div className="preloader-container" ref={preloaderContainer}>
      <div className="preloader-content">
        <div className="preloader-text">
          <img src={logosmall} className="preloader-logo" alt={"byMe"} />
          <TextProvider text1={text1} text2={text2} />
        </div>
      </div>
    </div>
  );
}
Preloader.propTypes = {
  id: PropTypes.number,
};

export default Preloader;
