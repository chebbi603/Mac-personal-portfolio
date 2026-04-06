import "../App.css";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe/aboutme";
import Contact from "../components/Contact/contact";
import Process from "../components/Process/Process";
import CaseStudies from "../components/CaseStudies/CaseStudies";
import ServiceSpectrum from "../components/ServiceSpectrum/ServiceSpectrum";
// import AboutMeMobile from "./aboutme/aboutme_mobile"; // Deleted
// import MediaQuery from "react-responsive"; // Deleted
import Preloader from "../components/Preloader/preloader";
import Navbar from "../components/Navbar/navbar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef, useState } from "react";
import { setupScrollTrigger } from "../utils/scroll";
import Pictures from "../components/Pictures/Picture";
import Companies from "../components/Companies/Companies";
import { useSectionNavigation } from "../hooks/useSectionNavigation";
import { useScrollFadeIn } from "../hooks/useScrollFadeIn";
import { useProjectsAnimation } from "../hooks/useProjectsAnimation";
import { useContextAwareness } from "../hooks/useContextAwareness";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
setupScrollTrigger();

function HomePage() {
  const el = useRef();
  const q = gsap.utils.selector(el);
  const [preloaderFinished, setPreloaderFinished] = useState(false);
  const { timeOfDay, themeColors } = useContextAwareness();
  // Time-aware creamy pastel navbar colors
  const navbarColorsByTime = {
    night: {
      aboutme: "#1f1a2e",       // Deep purple cream
      services: "#1a1525",      // Dark purple
      process: "#1f2a35",       // Muted teal-purple
      casestudies: "#1a1525",   // Dark purple
      contact: "#1a1525",       // Dark purple
    },
    morning: {
      aboutme: "#2d2820",       // Warm brown cream
      services: "#252015",      // Warm dark
      process: "#2a3028",       // Muted sage
      casestudies: "#252015",   // Warm dark
      contact: "#252015",       // Warm dark
    },
    afternoon: {
      aboutme: "#252422",       // Neutral warm
      services: "#1a1918",      // Neutral dark
      process: "#22333b",       // Muted teal
      casestudies: "#1a1918",   // Neutral dark
      contact: "#1a1918",       // Neutral dark
    },
    evening: {
      aboutme: "#241f2a",       // Purple cream
      services: "#1a1520",      // Purple dark
      process: "#1f2830",       // Purple teal
      casestudies: "#1a1520",   // Purple dark
      contact: "#1a1520",       // Purple dark
    },
  };

  const currentColors = navbarColorsByTime[timeOfDay] || navbarColorsByTime.afternoon;

  const navbarColors = [
    { trigger: ".aboutme-container", color: currentColors.aboutme },
    { trigger: ".servicespectrum-container", color: currentColors.services },
    { trigger: ".process-container", color: currentColors.process },
    { trigger: ".casestudies-container", color: currentColors.casestudies },
    { trigger: ".contact-container", color: currentColors.contact },
  ];

  // --- Animations ---

  // Fade In Process items (handled internally by Process component now)
  // useScrollFadeIn removed - Process component has its own scroll animation

  // Animate Contact
  useScrollFadeIn(el, ".contact-text", {
    from: { opacity: 0 },
    to: { opacity: 1, y: -100, zIndex: 5 },
    scrollTrigger: { trigger: ".contact-content", start: "20% 60%", end: "bottom 90%", scrub: true }
  }, preloaderFinished);

  // Projects Animation
  useProjectsAnimation(el, preloaderFinished);

  // Footer Animation - blur stagger
  // Footer Animation - blur stagger with mobile optimization
  useGSAP(() => {
    if (!preloaderFinished) return;

    ScrollTrigger.matchMedia({
      // Desktop
      "(min-width: 900px)": function () {
        gsap.fromTo(q(".footer"),
          { filter: "blur(20px)", opacity: 0 },
          {
            filter: "blur(0px)",
            opacity: 1,
            scrollTrigger: {
              trigger: q(".footer"),
              start: "top 80%",
              end: "top 40%",
              scrub: true
            }
          }
        );
      },
      // Mobile
      "(max-width: 899px)": function () {
        gsap.fromTo(q(".footer"),
          { filter: "blur(10px)", opacity: 0 }, // Less blur for performance
          {
            filter: "blur(0px)",
            opacity: 1,
            scrollTrigger: {
              trigger: q(".footer"),
              start: "top 90%", // Trigger earlier on mobile
              end: "top 60%",
              scrub: true
            }
          }
        );
      }
    });
  }, { scope: el, dependencies: [preloaderFinished] });

  // Navbar Colors
  useSectionNavigation(el, navbarColors, preloaderFinished, themeColors);


  return (
    <div ref={el} data-theme={timeOfDay}>
      <div className="blur"></div>
      <Navbar />
      <div className="App-header">
        <Preloader
          onLoadComplete={() => setPreloaderFinished(true)}
        />
        <Hero startAnimation={preloaderFinished} />
        <Companies />
        <AboutMe />
        <ServiceSpectrum />
        {/* <Pictures line={2} both={true} startAnimation={preloaderFinished} /> */}
        <Process />
        <CaseStudies />
        {/* <ProjectsList /> */}
        {/* <ProjectsList /> */}
        <div className="footer">
          <Contact />
        </div>

      </div>
    </div>
  );
}

export default HomePage;
