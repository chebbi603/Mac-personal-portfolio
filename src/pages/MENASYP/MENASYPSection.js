import React, { useRef } from "react";
import "../CaseStudy/casestudy.css";
import "../../components/ServiceSpectrum/servicespectrum.css";
import { Link } from "react-router-dom";
import ScrollVideoComponent from "../CaseStudy/ScrollVideoComponent";
import MediaQuery from "react-responsive";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import presentation1 from "./assets/menapresentation-1.webp";
import presentation2 from "./assets/menapresentation-2.webp";
import presentation3 from "./assets/menapresentation-3.webp";
import presentation4 from "./assets/menapresentation-4.webp";
import presentation5 from "./assets/menapresentation-5.webp";
import presentation6 from "./assets/menapresentation-6.webp";
import presentation7 from "./assets/menapresentation-7.webp";
import presentation8 from "./assets/menapresentation-8.webp";
import presentation9 from "./assets/menapresentation-9.webp";
import presentation10 from "./assets/menapresentation-10.webp";

import { GraphicPlaceholder, MergedCard, HeroBanner } from "../CaseStudy/CaseStudyComponents";

const menasypVideo = "/menasyp_mobile_optimized.mp4";
const menasypVideoWebm = "/menasyp_with_audio.webm";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function MENASYPSections() {
  const containerRef = useRef(null);

  useGSAP(() => {
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

      <HeroBanner imgSrc={presentation6} title="MENASYP 2025" />

      <MergedCard badge="IEEE R8" title="The First Fusion of MESYP and NASYP">
        <p className="merged-description" style={{ maxWidth: "800px" }}>
          The <b>R8 MENA SYP 2025</b>, organized by IEEE INSAT, will be the first-ever fusion of MESYP and NASYP. It will take place in Gammarth, Tunis, Tunisia, from August 27 to 29, 2025.
        </p>
        <p className="merged-description" style={{ maxWidth: "800px", marginTop: "1rem" }}>
          <b>MENA SYP 2025 will combine technological innovation, international networking, and cultural immersion</b>, marking a turning point for IEEE events.
        </p>

        <div className="merged-phases" style={{ marginTop: "3rem" }}>
          <span>Graphic & Brand Designer</span>
          <span className="phase-arrow">→</span>
          <span>Figma / After Effects / Premiere Pro</span>
        </div>
      </MergedCard>

      <MediaQuery query="(min-device-width: 1000px)">
        <GraphicPlaceholder noBorder>
          <video
            autoPlay loop muted
            style={{ width: "100%", display: "block", backgroundColor: "#000" }}
            preload="metadata"
            playsInline
            webkit-playsinline="true"
          >
            <source src={menasypVideo} type="video/mp4" />
            <source src={menasypVideoWebm} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </GraphicPlaceholder>
      </MediaQuery>

      <h2 className="servicespectrum-title" style={{ marginTop: "5rem", fontSize: "4rem" }}>Visual Identity</h2>

      <MergedCard badge="DESIGN PROCESS" title="Brand Development">
        <p className="merged-description">
          The design process focused on creating a cohesive visual identity that represents the fusion of MENA cultures while highlighting Tunisia's role as the host country.
        </p>
      </MergedCard>

      <GraphicPlaceholder noBorder>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1px", width: "100%", background: "rgba(254, 250, 224, 0.15)" }}>
          {[presentation1, presentation2, presentation3, presentation4, presentation5].map((img, idx) => (
            <img key={idx} src={img} alt={`Process ${idx}`} style={{ width: "100%", height: "auto", display: "block", backgroundColor: "#000" }} />
          ))}
        </div>
      </GraphicPlaceholder>

      <h2 className="servicespectrum-title" style={{ marginTop: "5rem", fontSize: "4rem" }}>Results</h2>

      <MergedCard badge="FINAL RESULTS" title="Brand Implementation">
        <p className="merged-description">
          The final brand identity successfully captures the essence of the MENA region while maintaining a modern and professional appearance suitable for an international congress.
        </p>
      </MergedCard>

      <GraphicPlaceholder noBorder>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1px", width: "100%", background: "rgba(254, 250, 224, 0.15)" }}>
          {[presentation6, presentation7, presentation8, presentation9, presentation10].map((img, idx) => (
            <img key={idx} src={img} alt={`Results ${idx}`} style={{ width: "100%", height: "auto", display: "block", backgroundColor: "#000" }} />
          ))}
        </div>
      </GraphicPlaceholder>
    </div>
  );
}

export default MENASYPSections;
