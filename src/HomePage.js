import "./App.css";
import Home from "./home";
import AboutMe from "./aboutme/aboutme";
import Contact from "./contact/contact";
import Expertise from "./expertise/expertise";
import ProjectsHeader from "./projects/projectsheader";
import AboutMeMobile from "./aboutme/aboutme_mobile";
import MediaQuery from "react-responsive";
import AnimatedCursor from "react-animated-cursor";
import Preloader from "./preloader/preloader";
import Navbar from "./navbar/navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap-trial/ScrollTrigger";
import { useRef } from "react";
import Pictures from "./Pictures/Picture";
import Companies from "./Companies/Companies";
import ScrollResetter from "./ScrollResetter/ScrollResetter";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.normalizeScroll(true);

function HomePage() {
  const el = useRef();
  const q = gsap.utils.selector(el);

  useGSAP(
    () => {
      q(".expertiseelement").forEach((circle) => {
        gsap.fromTo(
          circle,
          {
            opacity: 0,
            x: 80,
            fontWeight: 100,
          },
          {
            scrollTrigger: {
              trigger: circle,
              start: "top 90% top",
              end: "bottom 70%",
              scrub: true,
            },
            x: 0,
            opacity: 1,
            fontWeight: 600,
          }
        );
      });

      gsap.fromTo(
        ".contact-text",
        {
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: ".contact-content",
            start: "20% 60%",
            end: "bottom 90%",
            scrub: true,
          },
          opacity: 1,
          y: -100,
          zIndex: 5,
        }
      );

      // Projects Animation

      var sections = gsap.utils.toArray(".project-main");
      var containers = gsap.utils.toArray(".project-container");

      sections.forEach((container, index) => {
        gsap.fromTo(
          container,
          {
            opacity: 0,
            y: 100,
          },
          {
            scrollTrigger: {
              trigger: container,
              start: "top 100%",
              end: "top 60%",
              scrub: true,
            },
            y: 0,
            opacity: 1,
          }
        );
        gsap.fromTo(
          container,
          {
            y: 0,
          },
          {
            scrollTrigger: {
              trigger: containers[index],
              start: "top 10%",
              pin: container,
              end: "80% top 40%",
              scrub: true,
            },
            y: -50,
          }
        );
        gsap.fromTo(
          container,
          {
            opacity: 1,
          },
          {
            scrollTrigger: {
              trigger: containers[index],
              start: "bottom 60%",
              end: "80% top 90%",
              scrub: true,
            },
            opacity: 0,
          }
        );
        //button
      });

      q(".project-image-container").forEach((circle) => {
        gsap.fromTo(
          circle,
          {
            opacity: 0,
            y: 50,
          },
          {
            scrollTrigger: {
              trigger: circle,
              start: "top 100% bottom",
              scrub: true,
              end: "top 60%",
            },
            y: -50,
            delay: 2,
            opacity: 1,
          }
        );
        gsap.fromTo(
          circle,
          {
            y: -50,
            opacity: 1,
          },
          {
            scrollTrigger: {
              trigger: circle,
              start: "50% 40%",
              end: "50% 20%",
              scrub: true,
            },
            y: -50,
            opacity: 0,
          }
        );
      });

      q(".project-description").forEach((circle) => {
        gsap.fromTo(
          circle,
          {
            opacity: 0,
            y: 100,
          },
          {
            scrollTrigger: {
              trigger: circle,
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
          circle,
          {
            opacity: 1,
            y: 0,
          },
          {
            scrollTrigger: {
              trigger: circle,
              start: "top 20%",
              end: "top 10%",
              scrub: true,
            },
            y: -10,
            opacity: 0,
          }
        );
      });

      if (document.querySelector(".aboutme-sec1")) {
        gsap.to(".aboutme-sec1", {
          scrollTrigger: {
            trigger: ".aboutme-sec2",

            pin: ".aboutme-sec1",
            start: "top 40%",
            end: "bottom 60%",
            scrub: true,
          },
          y: -100,
        });
      }

      gsap.fromTo(
        ".footer",
        {
          autoAlpha: 0,
          scale: 0.9,
        },
        {
          scrollTrigger: {
            trigger: ".footer",
            start: "top 70%",
            end: "bottom bottom",
            scrub: true,
          },
          autoAlpha: 1,
          scale: 1,
        }
      );
      gsap.to(".App-header", {
        backgroundColor: "black",
        duration: 0.5,
      });

      gsap.fromTo(
        ".App-header",
        {
          backgroundColor: "black",
        },
        {
          scrollTrigger: {
            trigger: ".aboutme-container",
            start: "top 80%",
            end: "top 10%",
            scrub: true,
          },
          backgroundColor: "#212d40",
        }
      );
      gsap.fromTo(
        ".App-header",
        {
          backgroundColor: "#212d40",
        },
        {
          scrollTrigger: {
            trigger: ".expertise-container",
            start: "top 80%",
            end: "top 10%",
            scrub: true,
          },
          backgroundColor: "#291938",
        }
      );
      gsap.fromTo(
        ".App-header",
        {
          backgroundColor: "#291938",
        },
        {
          scrollTrigger: {
            trigger: ".company-container",
            start: "top 80%",
            end: "top 10%",
            scrub: true,
          },
          backgroundColor: "#2a2b47",
        }
      );
      gsap.fromTo(
        ".App-header",
        {
          backgroundColor: "#2a2b47",
        },
        {
          scrollTrigger: {
            trigger: ".projectsheader-container",
            start: "top 80%",
            end: "top 10%",
            scrub: true,
          },
          backgroundColor: "#252933",
        }
      );
      gsap.fromTo(
        ".App-header",
        {
          backgroundColor: "#252933",
        },
        {
          scrollTrigger: {
            trigger: ".contact-container",
            start: "top 80%",
            end: "top 10%",
            scrub: true,
          },
          backgroundColor: "#000",
        }
      );
      // navbar
      gsap.fromTo(
        ".headerc",
        {
          backgroundColor: "black",
        },
        {
          scrollTrigger: {
            trigger: ".aboutme-container",
            start: "top 80%",
            end: "top 10%",
            scrub: true,
          },
          backgroundColor: "#212d40",
        }
      );
      gsap.fromTo(
        ".headerc",
        {
          backgroundColor: "#212d40",
        },
        {
          scrollTrigger: {
            trigger: ".expertise-container",
            start: "top 80%",
            end: "top 10%",
            scrub: true,
          },
          backgroundColor: "#291938",
        }
      );

      gsap.to(".headerc", {
        backgroundColor: "black",
        duration: 0.5,
      });

      gsap.fromTo(
        ".headerc",
        {
          backgroundColor: "#291938",
        },
        {
          scrollTrigger: {
            trigger: ".company-container",
            start: "top 80%",
            end: "top 10%",
            scrub: true,
          },
          backgroundColor: "#2a2b47",
        }
      );
      gsap.fromTo(
        ".headerc",
        {
          backgroundColor: "#2a2b47",
        },
        {
          scrollTrigger: {
            trigger: ".projectsheader-container",
            start: "top 80%",
            end: "top 10%",
            scrub: true,
          },
          backgroundColor: "#252933",
        }
      );
      gsap.fromTo(
        ".headerc",
        {
          backgroundColor: "#252933",
        },
        {
          scrollTrigger: {
            trigger: ".contact-container",
            start: "top 80%",
            end: "top 10%",
            scrub: true,
          },
          backgroundColor: "#000",
        }
      );
    },
    { scope: el }
  );

  return (
    <div ref={el}>
      <Navbar />
      <div className="App-header">
        <section className={"section1"}>
          <Preloader text1={"LOADING"} text2={"PORTFOLIO..."} />
          <Home />
        </section>
        <Pictures line={2} both={true} />
        <section>
          <MediaQuery query="(max-width: 1000px)">
            <AboutMeMobile />
          </MediaQuery>
          <MediaQuery query="(min-width: 1000px)">
            <AboutMe />
          </MediaQuery>
        </section>
        <Expertise />
        <Companies />
        <ProjectsHeader />
        {/* <ProjectsList /> */}
        <div className="footer">
          <Contact />
        </div>
      </div>
      <ScrollResetter />
    </div>
  );
}

export default HomePage;
