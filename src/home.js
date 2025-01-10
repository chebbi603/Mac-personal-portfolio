import "./home.css";
import logosmall from "../src/assets/logo_small.svg";
import fb from "../src/assets/fb.svg";
import lin from "../src/assets/linkedin.svg";
import dri from "../src/assets/dribbble.svg";
import upw from "../src/assets/upwork.svg";
import insta from "../src/assets/insta.svg";
import vsco from "../src/assets/vsco.svg";
import github from "../src/assets/github.svg";
import MagneticButton from "./gsap";
import MediaQuery from "react-responsive";
import { useState } from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IconArrowDown } from "@tabler/icons-react";

gsap.registerPlugin(useGSAP);

const ProgressiveImage = ({ src, placeholder, alt }) => {
  const [imageSrc, setImageSrc] = useState(placeholder);

  const onImageLoad = () => {
    setImageSrc(src);
  };

  return (
    <img
      className="landing-img"
      fetchpriority="high"
      src={imageSrc}
      onLoad={onImageLoad}
      alt={alt}
    />
  );
};

function Home() {
  const container = useRef();
  useGSAP(() => {
    gsap.fromTo(
      ".esm-anim",
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "power1.out",
        duration: 0.5,
        stagger: 0.3,
        delay: 2.2,
      }
    );
  }, []);

  return (
    <div className="home">
      {/* <div className="header">
        <img src={logosmall} className="header-logo" alt={"byMe"} />
        <div className="mentions-l">
          <div className="available-icn"></div>
          <a
            className="mentions_txt"
            target="_blank"
            href="https://www.upwork.com/freelancers/ayoubc4"
          >
            Available for projects
          </a>
        </div>
      </div> */}
      <div className={"content"}>
        <div className="mentions-l">
          <div className="available-icn"></div>
          <a
            className="mentions_txt"
            target="_blank"
            href="https://www.upwork.com/freelancers/ayoubc4"
          >
            AVAILABLE FOR PROJECTS
          </a>
        </div>
        <div className="esmi" ref={container}>
          <p className={"esmi-text esm-anim"}>MOHAMED</p>
          <p className={"esmi-text esm-anim"}>AYOUB CHEBBI</p>
        </div>
        <p className={"desc-text esm-anim"}>
          FREELANCE UX/UI DESIGNER
          <br />
          COMPUTER SCIENCE ENGINEERING STUDENT
        </p>
        {/* <div className={"social-container esm-anim"}>
          <MagneticButton>
            <div className={"socials"}>
              <a
                className={"social-link"}
                target="_blank"
                href="https://www.facebook.com/chebbimedayoub"
              >
                <img className={"social-icon"} src={fb} />
              </a>
              <a
                className={"social-link"}
                target="_blank"
                href="https://www.linkedin.com/in/mohamed-ayoub-chebbi/"
              >
                <img className={"social-icon"} src={lin} />
              </a>
              <a
                className={"social-link"}
                target="_blank"
                href="https://www.dribbble.com/chebbimedayoub"
              >
                <img className={"social-icon"} src={dri} />
              </a>
              <a
                className={"social-link"}
                target="_blank"
                href="https://www.upwork.com/freelancers/ayoubc4"
              >
                <img className={"social-icon"} src={upw} />
              </a>
              <a
                className={"social-link"}
                target="_blank"
                href="https://www.instagram.com/chebbimedayoub/"
              >
                <img className={"social-icon"} src={insta} />
              </a>
              <a
                className={"social-link"}
                target="_blank"
                href="https://github.com/chebbi603"
              >
                <img className={"social-icon"} src={github} />
              </a>
              <a
                className={"social-link"}
                target="_blank"
                href="https://vsco.co/chebbimedayoub/gallery"
              >
                <img className={"social-icon"} src={vsco} />
              </a>
            </div>
          </MagneticButton>
        </div> */}
      </div>
      <div className="arrow">
        <IconArrowDown color="white" size={32} />
      </div>
    </div>
  );
}

export default Home;
