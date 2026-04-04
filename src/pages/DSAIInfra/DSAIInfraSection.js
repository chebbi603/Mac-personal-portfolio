import React, { useRef } from "react";
import "../CaseStudy/casestudy.css";
import "../../components/ServiceSpectrum/servicespectrum.css";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import swatchVideo from "./swatch record.mov";
import swatchImg from "./swatch.png";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// --- Subcomponents for Refactoring ---

const GraphicPlaceholder = ({ text, children, noBorder }) => (
  <div className="spectrum-columns">
    <div className="merged-card-wrapper" style={{ minHeight: "auto", borderBottom: noBorder ? "none" : undefined }}>
      <div className="spectrum-merged-card" style={{ padding: children ? "0" : undefined, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {text ? <span className="for-label">{text}</span> : children}
      </div>
    </div>
  </div>
);

const MergedCard = ({ badge, title, children }) => (
  <div className="spectrum-columns">
    <div className="merged-card-wrapper" style={{ minHeight: "auto" }}>
      <div className="spectrum-merged-card">
        <div className="merged-card-content">
          <div className="merged-badge">{badge}</div>
          <h2 className="merged-title">{title}</h2>
          {children}
        </div>
      </div>
    </div>
  </div>
);

const IssueColumn = ({ number, title, issueText, last }) => (
  <div className="spectrum-column">
    <div className="spectrum-content-wrapper">
      <div className="column-header">
        <span className="column-number">{number}</span>
        <h3 className="column-label" style={{ fontSize: "2rem" }}>{title}</h3>
      </div>
      <p className="column-for-clients" style={last ? { borderBottom: "none", paddingBottom: "0" } : {}}>
        <span className="for-label">The Issue:</span>
        <span className="for-text">{issueText}</span>
      </p>
    </div>
  </div>
);

const ValueColumn = ({ isPostSwatch, percentage, desc, time }) => {
  const color = isPostSwatch ? "#c3f0c8" : "#e96d77";
  return (
    <div className="spectrum-column" style={isPostSwatch ? { gridColumn: "4 / -2" } : { gridColumn: "2 / 4" }}>
      <div className="spectrum-content-wrapper">
        <div className="column-header">
          <span className="column-number" style={{ color }}>
            {isPostSwatch ? "POST-SWATCH" : "PRE-SWATCH"}
          </span>
          <h3 className="column-label" style={{ fontSize: "4rem", color }}>{percentage}</h3>
        </div>
        <p className="column-for-clients">
          <span className="for-label">Accuracy</span>
          <span className="for-text">{desc}</span>
        </p>
        <p className="column-ux-angle">{time}</p>
      </div>
    </div>
  );
};

// --- Main Component ---

function DSAIInfraSection() {
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
      
      {/* 1. HERO Section Banner */}
      <div style={{ width: "100%", marginTop: "10vh", marginBottom: "3rem", borderTop: "1px solid rgba(254, 250, 224, 0.15)", borderBottom: "1px solid rgba(254, 250, 224, 0.15)" }}>
        <img src={swatchImg} alt="Swatch Banner" style={{ width: "100%", height: "auto", display: "block" }} />
      </div>

      <h2 className="servicespectrum-title" style={{ marginTop: "0" }}>Swatch</h2>
      
      <MergedCard badge="DS-AI-INFRA" title="Semantic Context Over UI Systems">
        <p className="merged-description">
          An open-source RAG-powered knowledge layer that provides AI coding agents with structured understanding of UI design systems. Deployed at BMW.
        </p>
        <div className="merged-phases" style={{ marginTop: "3rem" }}>
          <span>UX Engineer & AI Strategist</span>
          <span className="phase-arrow">→</span>
          <span>Internal Platform</span>
          <span className="phase-arrow">→</span>
          <span>React / Node / Claude / MCP</span>
        </div>
      </MergedCard>

      <GraphicPlaceholder noBorder>
         <video src={swatchVideo} autoPlay loop muted playsInline style={{ width: "100%", height: "auto", display: "block" }} />
      </GraphicPlaceholder>

      {/* 2. Executive Summary */}
      <MergedCard badge="EXECUTIVE SUMMARY" title="Bridging the Deficit">
        <p className="merged-description" style={{ maxWidth: "800px" }}>
          Engineering teams rely heavily on AI agents to accelerate delivery. However, when these agents lack structured knowledge of internal design systems, they hallucinate component structures, ignore composition patterns, and generate unusable code that requires heavy manual review.
        </p>
        <p className="merged-description" style={{ maxWidth: "800px", marginTop: "1rem" }}>
          Swatch solves this. By operating as a RAG-powered layer connected to Claude via the Model Context Protocol (MCP), Swatch feeds agents the exact metadata and logic they need—shifting AI generated code to production quality on the first try.
        </p>
      </MergedCard>

      <h2 className="servicespectrum-title" style={{ marginTop: "5rem", fontSize: "4rem" }}>The Tax</h2>

      {/* 3. The Problem */}
      <div className="spectrum-columns">
        <IssueColumn 
          number="01" 
          title="Accuracy" 
          issueText="Agents guess properties or fall back to inline CSS when they cannot infer the right system utility." 
        />
        <IssueColumn 
          number="02" 
          title="Review" 
          issueText="Code review cycles stretch longer as senior engineers must catch subtle UI hallucinations." 
        />
        <IssueColumn 
          number="03" 
          title="Erosion" 
          issueText="Unchecked generated code creates parallel, off-brand component structures that fragment architecture." 
          last 
        />
        <div className="spectrum-separator"></div>
      </div>

      {/* 4. Solution Workflow Architecture */}
      <MergedCard badge="SOLUTION ARCHITECTURE" title="Context via Swatch">
        <p className="merged-description">
          When deployed, the developer does not need complex prompt engineering. The tooling bridges the intent natively, pushing documentation directly into the active reasoning loop.
        </p>
        <div className="merged-phases" style={{ marginTop: "3rem", fontSize: "1rem", color: "#fefae0" }}>
          <span className="for-label">1. PROMPT</span>
          <span className="phase-arrow">→</span>
          <span className="for-label">2. MCP QUERY</span>
          <span className="phase-arrow">→</span>
          <span className="for-label">3. RAG SEMANTICS</span>
            <span className="phase-arrow">→</span>
          <span className="for-label">4. GENERATION</span>
        </div>
      </MergedCard>

      <GraphicPlaceholder text="GRAPHIC PLACEHOLDER: ANIMATED DATA FLOW" />

      <h2 className="servicespectrum-title" style={{ marginTop: "5rem", fontSize: "4rem" }}>Value</h2>

      {/* 5. Business Value */}
      <div className="spectrum-columns">
        <ValueColumn 
          isPostSwatch={false} 
          percentage="60%" 
          desc="Generated UI heavily requires rework due to standard hallucinations." 
          time="Avg 10m correction time per component." 
        />
        <ValueColumn 
          isPostSwatch={true} 
          percentage="95%+" 
          desc="Strict design system compliance enforced by default on the first pass." 
          time="&lt; 1m correction time per component." 
        />
        <div className="spectrum-separator"></div>
      </div>

      {/* 6. Technical Schema Deep Dive */}
      <MergedCard badge="TECHNICAL DEEP DIVE" title="Intelligence Schema">
        <p className="merged-description">
          An AI agent cannot parse a standard developer website efficiently. Swatch works because of its underlying schema logic, indexing components across 5 discrete dimensions to ensure high-fidelity retrieval and minimum token waste.
        </p>
        <ul className="column-services" style={{ marginTop: "3rem" }}>
          <li>1. Metadata</li>
          <li>2. Component Semantics</li>
          <li>3. Technical Props Interface</li>
          <li>4. Embedded Vector Space</li>
          <li>5. Syntax Examples</li>
        </ul>
      </MergedCard>

      <GraphicPlaceholder text="GRAPHIC PLACEHOLDER: RADIAL SCHEMA MAP" />

      {/* 7. Agnostic Scalability */}
      <MergedCard badge="SCALABILITY" title="Library Agnosticism">
        <p className="merged-description">
          Swatch acts as the nervous system between any arbitrary design base and the LLM agent, decoupled from shadcn/ui. Ensure your design system translates its rules to the Swatch schema, and it immediately scales across the ecosystem.
        </p>
      </MergedCard>

      <GraphicPlaceholder text="GRAPHIC PLACEHOLDER: ECOSYSTEM (SHADCN ➔ RAG ➔ CLAUDE)" />

      {/* 8. About the Author */}
      <MergedCard badge="AUTHOR" title="The Systems Perspective">
        <p className="merged-description">
          Mohamed Ayoub Chebbi operates at the intersection of developer experience and product strategy. Recognizing the business bleed caused by LLM hallucinations in enterprise frontends, he constructed Swatch to bridge the technical gap between static design systems and active AI reasoning. The result is a scalable infrastructure piece that treats prompt generation as systems engineering, protecting both design fidelity and engineering productivity.
        </p>
      </MergedCard>

      {/* 9. Closing CTA */}
      <div className="fin" style={{ marginTop: "10vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%" }}>
        <p className="for-label">TRANSFORM YOUR WORKFLOW</p>
        <h2 className="merged-title" style={{ margin: "2rem 0", textAlign: "center" }}>Let's build intelligent systems.</h2>
        <Link to="/">
          <div className="studycase-btn">
            <p className="studycase-txt">HOME PAGE</p>
          </div>
        </Link>
      </div>

    </div>
  );
}

export default DSAIInfraSection;
