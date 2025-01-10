import "./App.css";
import Home from "./home";
import AboutMe from "./aboutme/aboutme";
import Contact from "./contact/contact";
import Expertise from "./expertise/expertise";
import ProjectsHeader from "./projects/projectsheader";
import AboutMeMobile from "./aboutme/aboutme_mobile";
import ProjectsList from "./projects/projectexample";
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

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

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

function HomePage() {
  const el = useRef();
  const q = gsap.utils.selector(el);

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
      waitForFontsLoad().then(() => {
        ScrollTrigger.refresh();
      });

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
        ScrollTrigger.refresh();

        q(".expertiseelement").forEach((circle) => {
          gsap.fromTo(
            circle,
            {
              opacity: 0,
              x: -40,
              fontWeight: 100,
            },
            {
              scrollTrigger: {
                trigger: circle,
                start: "top 100% top",
                end: "bottom 70%",
                scrub: true,
              },
              x: 0,
              opacity: 1,
              fontWeight: 600,
            }
          );
          gsap.fromTo(
            circle,
            {
              opacity: 1,
              y: 0,
              fontWeight: 600,
            },
            {
              scrollTrigger: {
                trigger: circle,
                start: "top 30% top",
                end: "top 15%",
                scrub: true,
              },
              y: -40,
              opacity: 0,
              fontWeight: 100,
            }
          );
        });

        gsap.fromTo(
          ".projectsheader-text",
          {
            opacity: 0,
          },
          {
            scrollTrigger: {
              trigger: ".projectsheader-content",
              start: "top 80% bottom 10%",
              end: "bottom 30%",
              scrub: true,
            },
            opacity: 1,
            y: 700,
            zIndex: 5,
          }
        );

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

        window.addEventListener("resize", function (event) {
          if (document.querySelector(".projectsheader-image")) {
            gsap.killTweensOf(".projectsheader-image");
            gsap.fromTo(
              ".projectsheader-image",
              {
                clipPath: "polygon(30% 10%, 70% 10%, 70% 90%, 30% 90%)",
              },
              {
                scrollTrigger: {
                  trigger: ".projectsheader-container",
                  start: "top 80% ",
                  end: "bottom 15% ",
                  scrub: true,
                },
                clipPath: "polygon(5% 10%, 95% 10%, 95% 90%, 5% 90%)",
              }
            );
          }
          if (document.querySelector(".projectsheader-image-mobile")) {
            gsap.killTweensOf(".projectsheader-image-mobile");
            gsap.fromTo(
              ".projectsheader-image-mobile",
              {
                clipPath: "polygon(45% 40%, 55% 40%, 55% 60%, 45% 60%)",
              },
              {
                scrollTrigger: {
                  trigger: ".projectsheader-container",
                  start: "top 60% ",
                  end: "bottom 15% ",
                  scrub: true,
                },
                clipPath: "polygon(37% 0%, 63% 0%, 63% 100%, 37% 100%)",
              }
            );
          }
        });
        if (document.querySelector(".projectsheader-image")) {
          gsap.fromTo(
            ".projectsheader-image",
            {
              clipPath: "polygon(30% 10%, 70% 10%, 70% 90%, 30% 90%)",
            },
            {
              scrollTrigger: {
                trigger: ".projectsheader-container",
                start: "top 80% ",
                end: "bottom 15% ",
                scrub: true,
              },
              clipPath: "polygon(5% 10%, 95% 10%, 95% 90%, 5% 90%)",
            }
          );
        }
        if (document.querySelector(".projectsheader-image-mobile")) {
          gsap.fromTo(
            ".projectsheader-image-mobile",
            {
              clipPath: "polygon(45% 40%, 55% 40%, 55% 60%, 45% 60%)",
            },
            {
              scrollTrigger: {
                trigger: ".projectsheader-container",
                start: "top 60% ",
                end: "bottom 15% ",
                scrub: true,
              },
              clipPath: "polygon(37% 0%, 63% 0%, 63% 100%, 37% 100%)",
            }
          );
        }

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
      });
      gsap.fromTo(
        ".studycase-btn",
        {
          opacity: 0,
          y: 100,
        },
        {
          scrollTrigger: {
            trigger: ".studycase-btn",
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
        ".studycase-btn",
        {
          opacity: 1,
          y: 0,
        },
        {
          scrollTrigger: {
            trigger: ".studycase-btn",
            start: "top 20%",
            end: "top 10%",
            scrub: true,
          },
          y: -10,
          opacity: 0,
        }
      );
      if (document.querySelector(".aboutme-sec1")) {
        gsap.to(".aboutme-sec1", {
          scrollTrigger: {
            trigger: ".aboutme-sec2",
            pin: ".aboutme-sec1",
            start: "top 30%",
            end: "bottom 60%",
            scrub: true,
          },
          y: -100,
        });
      }

      gsap.to(".expertise-sec1", {
        scrollTrigger: {
          trigger: ".expertise-container",
          pin: ".expertise-sec1",
          start: "top 20%",
          end: "bottom 30%",
          scrub: true,
        },
        y: -50,
      });
    },
    { scope: el }
  );

  return (
    <>
      <Navbar />
      <div className="App-header" ref={el}>
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
            clickables={[
              "a",
              "select",
              "textarea",
              "button",
              ".link",
              "Link",
              ".menu-link-element",
            ]}
          />
        </MediaQuery>
        <section className={"section1"}>
          <Preloader text1={"WELCOME"} text2={"ON BOARD"} />
          <Home />
        </section>
        <Pictures />
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
        <Contact />
      </div>
    </>
  );
}

export default HomePage;
