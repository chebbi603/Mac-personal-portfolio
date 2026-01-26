import "./aboutme.css";
import quote from "../../assets/quote.svg";
import mypic from "../../assets/mypic.jpg";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function AboutMe() {
  const container = useRef();
  const q = gsap.utils.selector(container);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 900px)",
          isMobile: "(max-width: 899px)",
        },
        (context) => {
          let { isMobile } = context.conditions;

          // 1. Initial State
          gsap.set(q(".aboutme-title, .quote-wrapper, .profile-container, .aboutme-desc"), {
            y: isMobile ? 30 : 50, // Less distance on mobile
            opacity: 0,
            filter: "blur(10px)",
          });

          // 2. Blur Fade In Animation
          gsap.to(q(".aboutme-title, .quote-wrapper, .profile-container, .aboutme-desc"), {
            scrollTrigger: {
              trigger: container.current,
              start: isMobile ? "top 75%" : "top 60%", // Earlier trigger on mobile
              end: "bottom bottom",
            },
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            stagger: isMobile ? 0.05 : 0.1, // Faster stagger
            duration: 0.8,
            ease: "power2.out",
          });
        }
      );

      // 3. Intensified Parallax using Translation
      mm.add("(min-width: 1200px)", () => {
        gsap.fromTo(q(".aboutme-sec1"), {
          y: -200,
        }, {
          scrollTrigger: {
            trigger: container.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
          y: 200,
          ease: "none",
        });
      });
    },
    { scope: container }
  );

  return (
    <div
      className="aboutme-container"
      ref={container}
      onClick={() => window.open("https://www.linkedin.com/in/mohamed-ayoub-chebbi/", "_blank")}
      data-cursor="custom"
      data-cursor-text="CHECK MY LINKEDIN"
      data-cursor-icon="arrow-up-right"
    >
      <div className="aboutme-textcontainer">
        <div className="aboutme-sec1">
          <div className="quote-wrapper">
            <img className="quote" src={quote} alt="Quote" />
          </div>
          <p className="aboutme-title">
            Building the future <br />
            of interaction, <br />
            one thoughtful interface at a time.
          </p>
        </div>
        <div className="aboutme-sec2">
          {/* Profile Header */}
          <div className="profile-container">
            <img className="profile-avatar" src={mypic} alt="Mohamed Ayoub" />
            <div className="profile-info">
              <h3 className="profile-name">Mohamed Ayoub</h3>
              <p className="profile-role">
                UX Architect - Forward Deployed Engineer @BMWGroup
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="aboutme-desc">
            <p>
              I bridge design and engineering to create digital experiences
              that feel effortless and perform without compromise.
            </p>
            <p>
              From enterprise workflows at BMW Group to AI products
              and adaptive systems, my studio delivers work that stands apart,
              where every detail serves the whole.
            </p>
            <p>
              Working with ambitious teams across the world.
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="about-myloc">ABOUT ME</p>
      </div>
    </div>
  );
}
export default AboutMe;


