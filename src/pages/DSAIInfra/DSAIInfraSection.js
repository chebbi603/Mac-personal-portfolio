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
import codeImg from "./code.png";
import mcpConfigImg from "./mcpconfig.png";
import ArchitectureVisual from "./ArchitectureVisual";
import { GraphicPlaceholder, MergedCard, IssueColumn, ValueColumn, HeroBanner } from "../CaseStudy/CaseStudyComponents";

import { setupScrollTrigger } from "../../utils/scroll";

gsap.registerPlugin(ScrollTrigger, useGSAP);
setupScrollTrigger();

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

      <HeroBanner imgSrc={swatchImg} title="Swatch" />

      <MergedCard badge="OPEN SOURCE PROJECT" title="Semantic Component Intelligence for AI Agents">
        <p className="merged-description">
          An open-source RAG-powered knowledge layer that gives AI coding agents structured, searchable baseline knowledge about every component in your design system. Deployed at BMW.
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
        <video src={swatchVideo} autoPlay loop muted playsInline style={{ width: "100%", height: "auto", display: "block", touchAction: "pan-y", pointerEvents: "none" }} />
      </GraphicPlaceholder>

      {/* 2. Executive Summary */}
      <MergedCard badge="WHAT IT IS" title="The Context Engine">
        <p className="merged-description" style={{ maxWidth: "800px" }}>
          Swatch sits precisely between an AI coding agent and your internal design system. It is designed to proactively answer three explicit questions before the agent even begins generating UI code:
        </p>
        <ul className="column-services" style={{ marginTop: "2rem", listStyleType: "disc", paddingLeft: "1.5rem" }}>
          <li><b>What component should I use?</b> (Semantic search by intent)</li>
          <li><b>How do I use it correctly?</b> (Props schema, composition patterns, accessibility roles)</li>
          <li><b>What should I explicitly avoid?</b> (Documented anti-patterns, incorrect usage warnings)</li>
        </ul>
      </MergedCard>

      <h2 className="servicespectrum-title" style={{ marginTop: "5rem", fontSize: "clamp(2.5rem, 10vw, 4rem)" }}>The Need</h2>

      {/* 3. The Problem */}
      <div className="spectrum-columns">
        <IssueColumn
          number="01"
          title="Rework Loops"
          issueText="Agents generate wrong props, broken composition, or hallucinate nonexistent components entirely."
        />
        <IssueColumn
          number="02"
          title="System Erosion"
          issueText="Inconsistent layouts, accessibility failures, and immediate branding breakdown across codebases."
        />
        <IssueColumn
          number="03"
          title="False Speed"
          issueText="The agent writes code faster, but the human reviewer works harder. The net productivity gain collapses."
        />
      </div>

      <MergedCard badge="THE INTELLIGENCE SCHEMA" title="5 Dimensions Per Component">
        <p className="merged-description">
          Unlike passive documentation files that an AI might scan inconsistently, Swatch relies on a strict intelligence schema. Every component gets evaluated and encoded across five mandatory dimensions:
        </p>
        <ul className="column-services" style={{ marginTop: "2rem" }}>
          <li><b>1. Identification:</b> Meta name, category, semantic tags, integration complexity, exact physical dependencies.</li>
          <li><b>2. Semantics:</b> Primary behavioral purpose, when to use, explicit circumstances on when to completely avoid.</li>
          <li><b>3. Technical Integrity:</b> Full props schema, valid composition slots, strict ARIA roles, verified keyboard support flags.</li>
          <li><b>4. Embedded Intelligence:</b> Common prop configurations clustered by user scenario, parent/child hierarchical dependencies.</li>
          <li><b>5. Executable Examples:</b> Real configuration payloads strictly tied back to the end-user goal and context.</li>
        </ul>
      </MergedCard>

      <GraphicPlaceholder noBorder>
        <img src={codeImg} alt="5D Intelligence Schema" style={{ width: "100%", height: "auto", display: "block", touchAction: "pan-y" }} />
      </GraphicPlaceholder>

      {/* 4. Solution Workflow Architecture */}
      <MergedCard badge="HOW IT WORKS" title="The Architecture Stack">
        <p className="merged-description">
          The full stack relies on local inference boundaries to prevent latency delays. Swatch acts as a bridge executed purely locally via Node or npm capabilities.
        </p>
        <p className="merged-description" style={{ marginTop: "1rem" }}>
          <b>1. RAG Pipeline:</b> Component JSON catalog → Any embedding model (Gemini Embedding)→ Embedded local ChromaDB store → Semantic contextual query → Ranked result payload.
        </p>
        <p className="merged-description" style={{ marginTop: "1rem" }}>
          <b>2. Server Runtime:</b> The coding agent natively hooks into the MCP Server via stdio transport, calling strict functions like `query_components("I need a login form")` and `get_component_details("Tell me about AlertDialog")`.
        </p>
      </MergedCard>

      <GraphicPlaceholder noBorder>
        <ArchitectureVisual />
      </GraphicPlaceholder>

      <h2 className="servicespectrum-title" style={{ marginTop: "5rem", fontSize: "clamp(2.5rem, 10vw, 4rem)" }}>BMW Context</h2>

      <MergedCard badge="ENTERPRISE IMPLEMENTATION" title="Deploying at BMW">
        <p className="merged-description" style={{ maxWidth: "1000px" }}>
          BMW's frontend engineering runs a heavy, custom React design system. While Claude Code had excellent generalized React capabilities, it had absolute zero awareness of BMW's brand extensions, internationalisation protocols, or naming conventions. Agents routinely hallucinated components that required extensive senior-engineer rework loops.
        </p>
        <p className="merged-description" style={{ maxWidth: "1000px", marginTop: "1rem" }}>
          We constructed a BMW-specific catalog inside Swatch. Anti-patterns like "never use base button" were explicitly documented as hard warnings to the LLM. With zero prompt changes from developers, Claude Code automatically gained full systemic compliance.
        </p>

        <div style={{ marginTop: "3rem" }}>
          <img src={mcpConfigImg} alt="MCP Config" style={{ width: "100%", height: "auto", display: "block", borderRadius: "8px", touchAction: "pan-y" }} />
        </div>
      </MergedCard>

      {/* 5. Business Value */}
      <div className="spectrum-columns" style={{ marginTop: "5rem" }}>
        <ValueColumn
          isPostSwatch={false}
          percentage="3 Iterations"
          desc="Developer prompts structural layout ➔ Agent guesses HTML inputs ➔ Review flags incorrect standards."
          time="Heavy manual rework required."
        />
        <ValueColumn
          isPostSwatch={true}
          percentage="1 Iteration"
          desc="Developer prompts structural layout ➔ Claude calls query_components ➔ Swatch injects compliance ➔ Code ships on first pass."
          time="Immediate production-quality compliance."
        />
        <div className="spectrum-separator"></div>
      </div>

      {/* 7. Agnostic Scalability */}
      <MergedCard badge="REACH & SCALABILITY" title="Completely Agnostic By Design">
        <p className="merged-description">
          The schema structure does not care about frameworks. Any team can author a catalog for their structural system and immediately plug it in. The `npm` MCP server intrinsically runs with any MCP-capable agent environment.
        </p>
        <p className="merged-description" style={{ marginTop: "1rem" }}>
          By open-sourcing Swatch, the community can construct verified catalogs for Material UI, Ant Design, Chakra UI — permanently establishing Swatch as the definitive context bridge between AI agents and custom organizational libraries.
        </p>

        <div style={{ display: "flex", gap: "2rem", marginTop: "3rem" }}>
          <a href="https://github.com/chebbi603/swatch" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <div style={{ padding: "12px 24px", border: "1px solid #fefae0", borderRadius: "50px", color: "#fefae0", fontSize: "14px", fontWeight: "bold" }}>
              VIEW GITHUB REPOSITORY ↗
            </div>
          </a>
        </div>
      </MergedCard>

    </div >
  );
}

export default DSAIInfraSection;
