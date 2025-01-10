import "./contact.css";
import logosmall from "../assets/logo_small.svg";
import wpp from "../assets/photo.webp";
import "../home.css";
import MagneticButton from "../gsap";
import MediaQuery from "react-responsive";
import { useState } from "react";
import { IconArrowDownRight, IconArrowUpRight } from "@tabler/icons-react";

const ProgressiveImage = ({ src, placeholder, alt }) => {
  const [imageSrc, setImageSrc] = useState(placeholder);

  const onImageLoad = () => {
    setImageSrc(src);
  };

  return <img className="wpp" src={imageSrc} onLoad={onImageLoad} alt={alt} />;
};
function Contact() {
  return (
    <div className="contact-container">
      {/* <ProgressiveImage src={wpp} placeholder={wpp_c}></ProgressiveImage> */}
      <div className="contact-content">
        <p className="contact-title">LET'S HAVE A QUICK CHAT :D</p>
        <div className="contact-link-container">
          <div className="menu-link-element">
            <a
              className="menu-link-text"
              target="_blank"
              href="mailto:chebbimohamedayoub@gmail.com"
            >
              EMAIL
            </a>
            <IconArrowUpRight size={24} />
          </div>
          <div className="menu-link-element">
            <a
              className="menu-link-text"
              target="_blank"
              href="https://www.linkedin.com/in/mohamed-ayoub-chebbi/"
            >
              LINKEDIN
            </a>
            <IconArrowUpRight size={24} />
          </div>
          <div className="menu-link-element">
            <a
              className="menu-link-text"
              target="_blank"
              href="https://www.dribbble.com/chebbimedayoub"
            >
              DRIBBBLE
            </a>
            <IconArrowUpRight size={24} />
          </div>{" "}
          <div className="menu-link-element">
            <a
              className="menu-link-text"
              target="_blank"
              href="https://github.com/chebbi603"
            >
              GITHUB
            </a>
            <IconArrowUpRight size={24} />
          </div>
          <div className="menu-link-element">
            <a
              className="menu-link-text"
              target="_blank"
              href="https://www.upwork.com/freelancers/ayoubc4"
            >
              UPWORK
            </a>
            <IconArrowUpRight size={24} />
          </div>
          <div className="menu-link-element">
            <a
              className="menu-link-text"
              href="https://docs.google.com/document/d/1yMcimjWwgk-uz37sfpEnC_1TAqAn8VN6pbHjrjwuwjI/edit?usp=sharing"
              target="_blank"
            >
              MY CV
            </a>
            <IconArrowUpRight size={24} />
          </div>
        </div>

        <p className="contact-title">THANK YOU</p>
        <p className="contact-myloc">
          Designed & Developed with {"<3"} by Chebbi Mohamed Ayoub
        </p>
        <p className="contact-myloc">Built with React & GSAP</p>
      </div>
      <MediaQuery minWidth={1500}>
        <div className="contact-img-container">
          <img className="contact-img" src={wpp} />
        </div>
      </MediaQuery>
    </div>
  );
}
export default Contact;
