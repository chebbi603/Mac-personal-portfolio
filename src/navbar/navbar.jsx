import { IconMenu, IconX } from "@tabler/icons-react";
import logosmall from "../assets/logo_small.svg";
import "./navbar.css";
import MediaQuery from "react-responsive";
import Menu from "./Menu";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap-trial/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function Navbar() {
  const [menu, setMenu] = useState(false);
  const showAnim = useRef(null);
  const reveal = useRef(null);

  useGSAP(() => {
    showAnim.current = gsap.fromTo(
      ".menu-container",
      {
        opacity: 0,
        visibility: "hidden",
        y: -30,
      },
      {
        opacity: 1,
        visibility: "visible",
        y: 0,
        duration: 0.5,
        ease: "power1.inOut",
        paused: true,
      }
    );
    reveal.current = gsap.fromTo(
      ".menu-element",
      {
        autoAlpha: 0,
        translateY: -30,
        immediateRender: true,
        visibility: "hidden",
      },
      {
        autoAlpha: 1,
        translateY: 0,
        stagger: 0.2,
        duration: 0.5,
        ease: "power1.out",
        paused: true,
        visibility: "visible",
      }
    );
  });
  const reverseMenu = () => {
    if (menu) {
      // Reverse the animation if the menu is open
      showAnim.current.reverse();
      reveal.current.reverse();
    } else {
      // Play the animation if the menu is closed
      showAnim.current.play();
      reveal.current.play();
    }
    setMenu(!menu); // Toggle menu state
  };

  return (
    <div className="navbar-container">
      <div className={`header ${menu ? "nocolor" : ""}`}>
        <img src={logosmall} className="header-logo" alt={"byMe"} />
        <div className="header-links">
          <MediaQuery minWidth={460}>
            <div className="contact-btn-container">
              <a
                href="mailto:chebbimohamedayoub@gmail.com"
                className="contact-button"
              >
                LET'S CHAT
              </a>
            </div>
          </MediaQuery>
          <a className="menu-icon" onClick={reverseMenu}>
            {!menu ? (
              <IconMenu size={32} color="white" />
            ) : (
              <IconX size={32} color="white" />
            )}
          </a>
        </div>
      </div>
      <Menu className="menu" />
    </div>
  );
}

export default Navbar;
