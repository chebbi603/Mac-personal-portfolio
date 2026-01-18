import "./App.css";
import Hero from "./Hero";
import AboutMe from "./aboutme/aboutme";
import Contact from "./contact/contact";
import Expertise from "./expertise/expertise";
import ProjectsHeader from "./projects/projectsheader";
// import AboutMeMobile from "./aboutme/aboutme_mobile"; // Deleted
// import MediaQuery from "react-responsive"; // Deleted
import Preloader from "./preloader/preloader";
import Navbar from "./navbar/navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import Pictures from "./Pictures/Picture";
import Companies from "./Companies/Companies";
import ScrollResetter from "./ScrollResetter/ScrollResetter";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.normalizeScroll(true);

function HomePage() {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const [preloaderFinished, setPreloaderFinished] = useState(false);

  useGSAP(
    () => {
      if (!preloaderFinished) return;

      // --- Helper Functions for Animations ---

      const animateExpertise = () => {
        q(".expertiseelement").forEach((circle) => {
          gsap.fromTo(
            circle,
            { opacity: 0, scale: 0.8 },
            {
              scrollTrigger: {
                trigger: circle,
                start: "top 90%",
                end: "bottom 50%",
                scrub: true,
              },
              opacity: 1,
              scale: 1,
            }
          );
        });
      };

      const animateContact = () => {
        gsap.fromTo(
          q(".contact-text"),
          { opacity: 0 },
          {
            scrollTrigger: {
              trigger: q(".contact-content"),
              start: "20% 60%",
              end: "bottom 90%",
              scrub: true,
            },
            opacity: 1,
            y: -100,
            zIndex: 5,
          }
        );
      };

      const animateProjects = () => {
        const sections = gsap.utils.toArray(q(".project-main"));
        const containers = gsap.utils.toArray(q(".project-container"));

        sections.forEach((section, index) => {
          // Entry
          gsap.fromTo(
            section,
            { opacity: 0, y: 100 },
            {
              scrollTrigger: {
                trigger: section,
                start: "top 100%",
                end: "top 60%",
                scrub: true,
              },
              y: 0,
              opacity: 1,
            }
          );
          // Pin & Scroll
          gsap.fromTo(
            section,
            { y: 0 },
            {
              scrollTrigger: {
                trigger: containers[index],
                start: "top 10%",
                pin: section,
                end: "80% top 40%",
                scrub: true,
              },
              y: -50,
            }
          );
          // Exit
          gsap.fromTo(
            section,
            { opacity: 1 },
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
        });

        // Image Container Animation
        q(".project-image-container").forEach((container) => {
          gsap.fromTo(
            container,
            { opacity: 0, y: 50 },
            {
              scrollTrigger: {
                trigger: container,
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
            container,
            { y: -50, opacity: 1 },
            {
              scrollTrigger: {
                trigger: container,
                start: "50% 40%",
                end: "50% 20%",
                scrub: true,
              },
              y: -50,
              opacity: 0,
            }
          );
        });

        // Description Animation
        q(".project-description").forEach((desc) => {
          gsap.fromTo(
            desc,
            { opacity: 0, y: 100 },
            {
              scrollTrigger: {
                trigger: desc,
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
            desc,
            { opacity: 1, y: 0 },
            {
              scrollTrigger: {
                trigger: desc,
                start: "top 20%",
                end: "top 10%",
                scrub: true,
              },
              y: -10,
              opacity: 0,
            }
          );
        });
      };



      // --- Execute Animations ---
      animateExpertise();
      animateContact();
      animateProjects();



      gsap.fromTo(
        q(".footer"),
        {
          autoAlpha: 0,
          scale: 0.9,
        },
        {
          scrollTrigger: {
            trigger: q(".footer"),
            start: "top 70%",
            end: "bottom bottom",
            scrub: true,
          },
          autoAlpha: 1,
          scale: 1,
        }
      );
      // Navbar & Header Color Transitions
      const setupColorTransition = (targetSelector, initialColor, config) => {
        config.reduce((prevColor, { trigger, color }) => {
          gsap.fromTo(
            q(targetSelector),
            { backgroundColor: prevColor },
            {
              scrollTrigger: {
                trigger: q(trigger),
                start: "top 80%",
                end: "top 10%",
                scrub: true,
              },
              backgroundColor: color,
              immediateRender: false,
            }
          );
          return color;
        }, initialColor);
      };

      const navbarColors = [
        { trigger: ".aboutme-container", color: "#212d40" },
        { trigger: ".expertise-container", color: "#291938" },
        { trigger: ".company-container", color: "#2a2b47" },
        { trigger: ".projectsheader-container", color: "#252933" },
        { trigger: ".contact-container", color: "#000" },
      ];

      // Initial Scroll: Transparent -> Base Dark Color (0-100px)
      gsap.to(q(".headerc"), {
        scrollTrigger: {
          trigger: el.current,
          start: "top top",
          end: "100px top",
          scrub: true,
        },
        backgroundColor: "rgba(0, 0, 0, 0.8)",
      });

      gsap.to(q(".App-header"), {
        scrollTrigger: {
          trigger: el.current,
          start: "top top",
          end: "100px top",
          scrub: true,
        },
        backgroundColor: "black",
      });

      setupColorTransition(".headerc", "rgba(0, 0, 0, 0.8)", navbarColors);
      setupColorTransition(".App-header", "black", navbarColors);

    },
    { scope: el, dependencies: [preloaderFinished] }
  );

  return (
    <div ref={el}>
      <div className="blur"></div>
      <Navbar />
      <div className="App-header">
        <section className={"section1"}>
          <Preloader
            text1={"LOADING"}
            text2={"PORTFOLIO..."}
            onLoadComplete={() => setPreloaderFinished(true)}
          />
          <Hero startAnimation={preloaderFinished} />
        </section>
        <section>
          <section>
            <AboutMe />
          </section>
        </section>
        <Pictures line={2} both={true} startAnimation={preloaderFinished} />



        <Expertise />
        <Companies />
        <ProjectsHeader id={1} startAnimation={preloaderFinished} />
        {/* <ProjectsList /> */}
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
