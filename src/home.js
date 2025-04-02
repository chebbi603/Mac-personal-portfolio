import "./home.css";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { IconArrowDown } from "@tabler/icons-react";
import img1 from "./assets/photo-2.webp";

gsap.registerPlugin(useGSAP);

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
      <div className="home-container">
        <div className={"content"}>
          <div className="esmi" ref={container}>
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
            <br />
            <p className={"esmi-text esm-anim"}>I CRAFT DIGITAL</p>
            <p className={"esmi-text esm-anim"}>SOLUTIONS WITH</p>
            <p className={"esmi-text esm-anim"}>
              <span style={{ fontFamily: "Space Grotesk", fontWeight: 400 }}>
                {"{"}C0DE{"} "}
              </span>
              &
              <span style={{ fontFamily: "Parisienne", fontWeight: 400 }}>
                {" "}
                Design
              </span>
            </p>
          </div>
          <p className={"desc-text esm-anim"}>
            MY NAME IS MOHAMED AYOUB 👋
            <br />I AM A <span className="tun">TUNISIAN</span> UX/UI DESIGNER &
            <br />A COMPUTER SCIENCE ENGINEERING STUDENT
            <br />
            BASED IN DEBRECEN, HUNGARY
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

        <img className="home-img esm-anim" src={img1}></img>
      </div>
      <div className="arrow">
        <IconArrowDown color="white" size={32} />
      </div>
    </div>
  );
}

export default Home;
