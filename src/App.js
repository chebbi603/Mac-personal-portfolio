import "./App.css";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useLayoutEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Helmet } from "react-helmet";
import { Route, Routes } from "react-router";
import HomePage from "./HomePage";
import CaseStudy from "./case-study/CaseStudy";

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

function App() {
  //FIREBASE
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "mac-portfolio-3a56b.firebaseapp.com",
    projectId: "mac-portfolio-3a56b",
    storageBucket: "mac-portfolio-3a56b.appspot.com",
    messagingSenderId: "569080617747",
    appId: "1:569080617747:web:78ff432fa0ba47358698e6",
    measurementId: "G-VJYQN03EW8",
  };
  //

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  const lenis = new Lenis({
    duration: 0.6,
    easing: (t) => Math.min(1, 1.01 - Math.pow(2, -10 * t)),
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  const el = useRef();
  const q = gsap.utils.selector(el);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
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
      gsap.fromTo(
        ".preloader-img",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 0,
          duration: 2,
        }
      );
      gsap.registerPlugin(ScrollTrigger);
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

        gsap.to(".landing-container", {
          scrollTrigger: {
            trigger: ".landing-img",
            start: "top",
            end: "bottom",
            scrub: true,
          },
          y: -100,
        });

        q(".expertiseelement").forEach((circle) => {
          gsap.fromTo(
            circle,
            {
              opacity: 0,
              x: -40,
            },
            {
              scrollTrigger: {
                trigger: circle,
                start: "top 100% bottom",
                end: "top 70%",
                scrub: true,
              },
              x: 0,
              delay: 0.5,
              opacity: 1,
            }
          );
          gsap.fromTo(
            circle,
            {
              opacity: 1,
              x: 0,
            },
            {
              scrollTrigger: {
                trigger: circle,
                start: "top 30% top",
                end: "top 15%",
                scrub: true,
              },
              x: -50,
              opacity: 0,
              duration: 0.5,
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
            y: 600,
            zIndex: 5,
          }
        );
        gsap.fromTo(
          ".tuniscovery-text",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 2,
            delay: 2.5,
          }
        );
        gsap.to(".tuniscovery-text", {
          scrollTrigger: {
            trigger: ".projectsheader-content",
            start: "top 40% bottom 10%",
            end: "bottom 30%",
            scrub: true,
          },
          y: 600,
          zIndex: 5,
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
        var studies = gsap.utils.toArray(".section-content");

        studies.forEach((content, index) => {
          gsap.fromTo(
            content,
            {
              opacity: 0,
              y: 100,
            },
            {
              scrollTrigger: {
                trigger: content,
                start: "top 80%",
                end: "top 60%",
                scrub: true,
              },
              y: 0,
              opacity: 1,
            }
          );
        });

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
            trigger: ".aboutme-textcontainer",
            pin: ".aboutme-sec1",
            start: "top 20%",
            endTrigger: ".aboutme-container",
            end: "bottom 95%",
            scrub: true,
          },
          y: -100,
        });
      }

      gsap.to(".expertise-sec1", {
        scrollTrigger: {
          trigger: ".expertise-container",
          pin: ".expertise-sec1",
          start: "top 5%",
          end: "bottom 30%",
          endTrigger: ".expertise-myloc",
          scrub: true,
        },
        y: -50,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="App" ref={el}>
      <Helmet>
        <meta
          name="description"
          content="Welcome to Mohamed Ayoub Chebbi's portfolio, a 21 year old UX/UI Designer and Developer studying in Hungary"
        />
        <meta
          name="keywords"
          content="freelancer, tunisia, tunisian designer, mohamed ayoub chebbi, ayoub chebbi, UX design, UI design, user interface, web design, graphic design, software development, photography, programming, HTML, CSS, JavaScript, React, Figma, Upwork, Design Freelancer, Java, Android"
        />
        <meta property="og:url" content="https://chebbimedayoub.tech" />
      </Helmet>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tuniscovery" element={<CaseStudy />} />
      </Routes>
    </div>
  );
}

export default App;
