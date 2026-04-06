import React, { useRef } from "react";
import "./casestudy.css";
import "../../components/ServiceSpectrum/servicespectrum.css";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import img1 from "./assets/h4tp-01.png";
import img2 from "./assets/h4tp-02.png";
import img3 from "./assets/h4tp-03.png";
import img4 from "./assets/h4tp-04.png";
import img5 from "./assets/h4tp-05.png";
import img6 from "./assets/h4tp-06.png";
import logo from "./assets/logo.svg";
import tuniscovery1 from "./assets/tuniscovery_1.webm";
import tuniscovery2 from "./assets/tuniscovery_2.webm";
import tuniscovery3 from "./assets/tuniscovery_3.webm";

import { GraphicPlaceholder, MergedCard, IssueColumn, HeroBanner } from "./CaseStudyComponents";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Sections() {
  const containerRef = useRef(null);
  const bannerRef = useRef(null);

  useGSAP(() => {
    // Premium breathing banner background animation
    const colors = ["#E63946", "#715AFF", "#588157", "#4361EE", "#6798C0", "#D36135"];
    gsap.set(bannerRef.current, { backgroundColor: colors[0] });

    const tl = gsap.timeline({ repeat: -1 });
    colors.forEach((color, i) => {
      const nextColor = colors[(i + 1) % colors.length];
      tl.to(bannerRef.current, {
        backgroundColor: nextColor,
        duration: 2,           // 2 second smooth crossfade
        ease: "power3.inOut",  // Premium easing
        delay: 2               // Hold the static color for 2 seconds before transitioning
      });
    });

    const columns = gsap.utils.toArray(".spectrum-column");
    const mergedCards = gsap.utils.toArray(".merged-card-wrapper");
    const allElements = [...columns, ...mergedCards];
    const isMobile = window.innerWidth < 900;

    gsap.set(allElements, { opacity: 0, y: 60, filter: "blur(20px)" });

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: isMobile ? "top 85%" : "top 75%",
      onEnter: () => {
        gsap.to(allElements, {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: isMobile ? 0.08 : 0.15,
          ease: "power3.out",
        });
      },
    });
  }, { scope: containerRef });

  return (
    <div className="servicespectrum-container" ref={containerRef} style={{ background: "transparent", minHeight: "auto", paddingBottom: "10vh" }}>

      <HeroBanner 
        containerRef={bannerRef}
        customMedia={<img src={logo} alt="Tuniscovery" style={{ width: "80%", maxWidth: "400px", height: "auto", objectFit: "contain" }} />} 
        title="Tuniscovery" 
      />

      <MergedCard badge="BACKGROUND" title="The Ultimate Tourism Gateway">
        <p className="merged-description">
          <b>#TourismTechJam</b> was an intense 24-hour Hackathon hosted at The
          Dot, organized by GIZ Tunisie as part of the <b>Tounes Wijhetouna</b> initiative.
          This event was an incredible opportunity to delve into the current
          state of Tourism in Tunisia and collaborate on innovative
          solutions alongside the five active DMOs in the country.
        </p>
        <p className="merged-description" style={{ marginTop: "1rem" }}>
          Our project focused on <b>developing a mobile app</b> designed to be
          the ultimate gateway for tourists visiting Tunisia. We dedicated
          significant effort to creating an intuitive User Experience to ensure
          easy navigation and exploration.
        </p>
        <div className="merged-phases" style={{ marginTop: "3rem" }}>
          <span>UX/UI Designer</span>
          <span className="phase-arrow">→</span>
          <span>Mobile App</span>
          <span className="phase-arrow">→</span>
          <span>Hackathon (24 hours)</span>
        </div>
      </MergedCard>

      <MergedCard badge="THE PROCESS" title="Design Lifecycle">
        <div className="merged-phases" style={{ marginTop: "1rem", fontSize: "1rem", color: "#fefae0", flexWrap: "wrap" }}>
          <span className="for-label">1. UNDERSTAND</span>
          <span className="phase-arrow">→</span>
          <span className="for-label">2. RESEARCH</span>
          <span className="phase-arrow">→</span>
          <span className="for-label">3. ANALYZE</span>
          <span className="phase-arrow">→</span>
          <span className="for-label">4. DESIGN</span>
          <span className="phase-arrow">→</span>
          <span className="for-label">5. PITCH</span>
        </div>
      </MergedCard>

      <h2 className="servicespectrum-title" style={{ marginTop: "5rem", fontSize: "clamp(2rem, 10vw, 4rem)" }}>The Problem</h2>

      <MergedCard badge="THE CHALLENGE" title="Dependency & Isolation">
        <p className="merged-description" style={{ maxWidth: "900px" }}>
          <b>90% of tourists rely heavily on travel agencies to plan their trips, limiting their ability to explore destinations independently.</b>
        </p>
        <p className="merged-description" style={{ maxWidth: "900px", marginTop: "1rem" }}>
          This dependency reduces the sense of adventure and customization, leaving travelers with less opportunity to uncover hidden gems on their own. It also causes problems with local businesses that are not affiliated with large travel agencies. The challenge is to create a tool that empowers tourists to independently discover attractions while offering tailored suggestions.
        </p>
      </MergedCard>

      <div className="spectrum-columns" style={{ marginTop: "5rem" }}>
        <IssueColumn
          number="01"
          title="Tourists"
          issueText="Rely heavily on organized travel agencies, missing authentic hidden gems due to safety or language concerns."
        />
        <IssueColumn
          number="02"
          title="DMO Managers"
          issueText="Struggle to promote lesser-known cultural destinations and connect directly with tourists in real time."
        />
        <IssueColumn
          number="03"
          title="Local Businesses"
          issueText="Suffer from a lack of visibility compared to agency-affiliated large-scale shops and restaurants."
          last
        />
        <div className="spectrum-separator"></div>
      </div>

      <MergedCard badge="SOLUTION" title="Sites, Hotels, and Journeys">
        <p className="merged-description">
          Our aim was to make Tuniscovery the first application to download when landing in Tunisia.
        </p>
        <ul className="column-services" style={{ marginTop: "2rem", listStyleType: "disc", paddingLeft: "1.5rem" }}>
          <li><b>Trip Planning:</b> A robust journey planning system mapping out full days.</li>
          <li><b>DMO Integration:</b> A dedicated space for every Tunisian Destination Management Organization.</li>
          <li><b>Immersive Views:</b> Exploring sites with full video and immersive rich media.</li>
        </ul>
      </MergedCard>

      <GraphicPlaceholder noBorder>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1px", width: "100%", background: "rgba(254, 250, 224, 0.15)" }}>
          <video src={tuniscovery1} autoPlay loop muted playsInline style={{ width: "100%", height: "auto", display: "block", backgroundColor: "#000" }} />
          <video src={tuniscovery2} autoPlay loop muted playsInline style={{ width: "100%", height: "auto", display: "block", backgroundColor: "#000" }} />
          <video src={tuniscovery3} autoPlay loop muted playsInline style={{ width: "100%", height: "auto", display: "block", backgroundColor: "#000" }} />
        </div>
      </GraphicPlaceholder>

      <h2 className="servicespectrum-title" style={{ marginTop: "5rem", fontSize: "clamp(2rem, 10vw, 4rem)" }}>Visual Identity</h2>

      <MergedCard badge="BRANDING" title="Consistency vs Diversity">
        <p className="merged-description" style={{ maxWidth: "900px" }}>
          One of the challenges of this hackathon was to offer a space for Tunisian DMOs given that each DMO has a distinct color palette and design language that represents the diversity of the Tunisian landscape (beaches, deserts, forests, ancient ruins). We crafted a set of color palettes applying the 60-30-10 rule.
        </p>

        <div style={{ display: "flex", gap: "1rem", overflowX: "auto", paddingBottom: "1rem", WebkitOverflowScrolling: "touch", width: "100%" }}>
          {[
            { name: "Tuniscovery Main", colors: ["#F7F9FC", "#0A131F", "#E63946", "#1D3557", "#F1FAEE"] },
            { name: "DMO Tunis Carthage", colors: ["#715AFF", "#102E4A", "#A682FF"] },
            { name: "DMO Zaghouan", colors: ["#588157", "#FEFAE0", "#283618"] },
            { name: "DMO Mehdia", colors: ["#4361EE", "#F72585", "#3A0CA3"] },
            { name: "DMO Djerba", colors: ["#6798C0", "#FDC921", "#FFFDF7"] },
            { name: "DMO Dahar", colors: ["#D36135", "#282B28", "#3E5641"] },
          ].map(palette => (
            <div key={palette.name} style={{ display: "flex", flexDirection: "column", border: "1px solid rgba(254, 250, 224, 0.15)", gap: "1rem", padding: "1.5rem", background: "rgba(0,0,0,0.2)", flexShrink: 0, minWidth: "200px" }}>
              <p className="for-label" style={{ margin: "0", marginBottom: "1rem" }}>{palette.name}</p>
              <div style={{ display: "flex", width: "100%", height: "24px" }}>
                {palette.colors.map((color, idx) => (
                  <div key={idx} style={{ flex: 1, backgroundColor: color }}></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </MergedCard>

      <h2 className="servicespectrum-title" style={{ marginTop: "5rem", fontSize: "clamp(2rem, 10vw, 4rem)" }}>Outcome</h2>

      <MergedCard badge="THE RESULT" title="Awarded Second Prize 🏆">
        <p className="merged-description">
          Our application was highly appreciated by the jury, especially for its design execution within the 24-hour limit.
        </p>
      </MergedCard>

      <GraphicPlaceholder noBorder>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 600px), 1fr))", gap: "1px", width: "100%", background: "rgba(254, 250, 224, 0.15)" }}>
          {[img6, img5, img4, img3, img2, img1].map((img, idx) => (
            <img key={idx} src={img} alt={`Process ${idx}`} style={{ width: "100%", height: "auto", display: "block", backgroundColor: "#000" }} />
          ))}
        </div>
      </GraphicPlaceholder>

    </div>
  );
}

export default Sections;
