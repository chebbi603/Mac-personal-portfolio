import Navbar from "../navbar/navbar";
import AnimatedCursor from "react-animated-cursor";
import MediaQuery from "react-responsive";
import Preloader from "../preloader/preloader";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import "./404.css";

gsap.registerPlugin(useGSAP);
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

function P404() {
  const c404 = useRef();
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
    { scope: c404 }
  );
  return (
    <div ref={c404}>
      <Navbar />
      <MediaQuery query="(min-device-width: 700px)">
        <AnimatedCursor
          backgroundColor={"#000"}
          innerSize={8}
          outerSize={25}
          innerScale={1}
          outerScale={1.7}
          hasBlendMode={true}
          outerAlpha={0}
          zIndex={500}
          outerStyle={{
            mixBlendMode: "exclusion",
            backgroundColor: "#fff",
          }}
          innerStyle={{
            mixBlendMode: "difference",
            backgroundColor: "#fff",
          }}
          clickables={["a", "select", "textarea", "button", ".link", "Link"]}
        />
      </MediaQuery>
      <Preloader text1={"OOPS..."} text2={""} />
      <div className="p404-container">
        <p className="p404-text">It looks like this page is unavailable</p>
        <Link to="/" className="project-button">
          HOME PAGE
        </Link>
      </div>
    </div>
  );
}

export default P404;
