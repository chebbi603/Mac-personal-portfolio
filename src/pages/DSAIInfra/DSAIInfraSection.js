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
          <h2 className="merged-title" style={{ fontSize: title.length > 25 ? "2.5rem" : "3rem"}}>{title}</h2>
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
          <span className="for-label">Workflow state</span>
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
         <video src={swatchVideo} autoPlay loop muted playsInline style={{ width: "100%", height: "auto", display: "block" }} />
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

      <h2 className="servicespectrum-title" style={{ marginTop: "5rem", fontSize: "4rem" }}>The Need</h2>

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
          last 
        />
        <div className="spectrum-separator"></div>
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

      <GraphicPlaceholder text="GRAPHIC PLACEHOLDER: 5D INTELLIGENCE SCHEMA VISUAL" />

      {/* 4. Solution Workflow Architecture */}
      <MergedCard badge="HOW IT WORKS" title="The Architecture Stack">
        <p className="merged-description">
           The full stack relies on local inference boundaries to prevent latency delays. Swatch acts as a bridge executed purely locally via Node or npm capabilities. 
        </p>
        <p className="merged-description" style={{ marginTop: "1rem" }}>
           <b>1. RAG Pipeline:</b> Component JSON catalog → Google AI text-embedding-004 → Embedded local ChromaDB store → Semantic contextual query → Ranked result payload.
        </p>
        <p className="merged-description" style={{ marginTop: "1rem" }}>
           <b>2. Server Runtime:</b> The Claude Code agent natively hooks into the MCP Server via stdio transport, calling strict functions like `query_components("I need a login form")` and `get_component_details("Tell me about AlertDialog")`. 
        </p>
      </MergedCard>

      <GraphicPlaceholder text="GRAPHIC PLACEHOLDER: SYSTEM ARCHITECTURE (CLAUDE ➔ MCP ➔ RAG ENGINE)" />

      <h2 className="servicespectrum-title" style={{ marginTop: "5rem", fontSize: "4rem" }}>BMW Context</h2>

      <MergedCard badge="ENTERPRISE IMPLEMENTATION" title="Deploying at BMW">
        <p className="merged-description" style={{ maxWidth: "1000px" }}>
          BMW's frontend engineering runs a heavy, custom React design system. While Claude Code had excellent generalized React capabilities, it had absolute zero awareness of BMW's brand extensions, internationalisation protocols, or naming conventions. Agents routinely hallucinated components that required extensive senior-engineer rework loops.
        </p>
        <p className="merged-description" style={{ maxWidth: "1000px", marginTop: "1rem" }}>
          We constructed a BMW-specific catalog inside Swatch. Anti-patterns like "never use base button" were explicitly documented as hard warnings to the LLM. With zero prompt changes from developers, Claude Code automatically gained full systemic compliance.
        </p>
        
        <div style={{ marginTop: "3rem", padding: "2rem", border: "1px dashed rgba(254, 250, 224, 0.3)", borderRadius: "8px", background: "rgba(0,0,0,0.2)"}}>
          <p className="for-label" style={{ marginBottom: "1rem" }}>config.json</p>
          <pre style={{ margin: 0, fontFamily: "monospace", fontSize: "14px", color: "rgba(254, 250, 224, 0.9)" }}>
{`{
  "mcpServers": {
    "swatch": {
      "command": "npx",
      "args": ["swatch-mcp", "--catalog", "./swatch-catalog/bmw-design-system"]
    }
  }
}`}
          </pre>
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
           <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <div style={{ padding: "12px 24px", border: "1px solid #fefae0", borderRadius: "50px", color: "#fefae0", fontSize: "14px", fontWeight: "bold" }}>
                 VIEW GITHUB REPOSITORY ↗
              </div>
           </a>
        </div>
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
