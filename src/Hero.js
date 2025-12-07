import "./home.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IconArrowDown } from "@tabler/icons-react";
import img1 from "./assets/photo-2.webp";

gsap.registerPlugin(useGSAP);

function Hero() {
  const container = useRef();
  const q = gsap.utils.selector(container);

  useGSAP(() => {
    gsap.fromTo(
      q(".esm-anim"),
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
  }, { scope: container });

  return (
    <div className="home">
      <div className="home-container" ref={container}>
        <div className={"content"}>
          <div className="esmi">
            <div className="mentions-l">
              <div className="available-icn"></div>
              <a
                className="mentions_txt"
                target="_blank" rel="noreferrer"
                href="https://www.upwork.com/freelancers/ayoubc4"
              >
                AVAILABLE FOR PROJECTS
              </a>
            </div>
            <br />
            <h1 className={"esmi-text esm-anim"}>I CRAFT DIGITAL</h1>
            <h1 className={"esmi-text esm-anim"}>SOLUTIONS WITH</h1>
            <h1 className={"esmi-text esm-anim"}>
              <span style={{ fontFamily: "Space Grotesk", fontWeight: 400 }}>
                {"{"}C0DE{"} "}
              </span>
              &
              <span style={{ fontFamily: "Parisienne", fontWeight: 400 }}>
                {" "}
                Design
              </span>
            </h1>
          </div>
          <p className={"desc-text esm-anim"}>
            MY NAME IS MOHAMED AYOUB 👋
            <br />I AM A <span className="tun">TUNISIAN</span> UX/UI DESIGNER &
            <br />A COMPUTER SCIENCE ENGINEERING STUDENT
            <br />
            BASED IN DEBRECEN, HUNGARY
          </p>
        </div>

        <img className="home-img esm-anim" src={img1} alt="Mohamed Ayoub Chebbi"></img>
      </div>
      <div className="arrow">
        <IconArrowDown color="white" size={32} />
      </div>
    </div>
  );
}

export default Hero;
