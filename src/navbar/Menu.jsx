import { useGSAP } from "@gsap/react";
import "./navbar.css";
import gsap from "gsap";
import { IconArrowUpRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP);

function Menu() {
  useGSAP(() => {
    gsap.to(".menu-container", {
      visibility: "hidden",
      duration: 0,
    });
  });
  return (
    <div className="menu-container">
      <div></div>
      <div className="menu-elements">
        <Link className="menu-element" to="/">
          HOME
        </Link>
        <Link className="menu-element" to="/projects">
          PROJECTS
        </Link>
        <Link className="menu-element" to="/contact">
          CONTACT
        </Link>
      </div>
      <div className="menu-link-container">
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
            href="https://docs.google.com/document/d/1yMcimjWwgk-uz37sfpEnC_1TAqAn8VN6pbHjrjwuwjI/edit?usp=sharing"
            target="_blank"
            className="menu-link-text"
          >
            MY CV
          </a>
          <IconArrowUpRight size={24} />
        </div>
      </div>
    </div>
  );
}

export default Menu;
