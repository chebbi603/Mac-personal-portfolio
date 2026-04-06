import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { setupScrollTrigger } from "../../utils/scroll";
import "./ArchitectureVisual.css";

gsap.registerPlugin(ScrollTrigger);
setupScrollTrigger();

const stages = [
  {
    label: "Clients",
    title: "AI Agent",
    desc: "Claude, Cursor, or any MCP-capable coding environment.",
  },
  {
    label: "Protocol",
    title: "MCP Server",
    desc: "Stdio bridge exposing query and detail tools to the agent.",
  },
  {
    label: "Intelligence",
    title: "Swatch Core",
    desc: "RAG pipeline mapping natural-language intent to verified components.",
  },
  {
    label: "Data",
    title: "Component Catalog",
    desc: "Structured JSON encoded across the 5-dimension intelligence schema.",
  },
];

const ArchitectureVisual = () => {
  const wrapperRef = useRef(null);

  useGSAP(
    () => {
      const nodes = gsap.utils.toArray(".arch-node-inner", wrapperRef.current);
      const connectors = gsap.utils.toArray(".arch-connector-line", wrapperRef.current);
      const pulses = gsap.utils.toArray(".arch-connector-pulse", wrapperRef.current);
      const isMobile = window.innerWidth < 900;

      // Initial hidden state
      gsap.set(nodes, { opacity: 0, y: 40, filter: "blur(12px)" });
      gsap.set(connectors, { scaleX: isMobile ? 1 : 0, scaleY: isMobile ? 0 : 1, transformOrigin: "left center" });

      // Scroll-triggered reveal
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top 85%",
        once: true,
        onEnter: () => {
          // Nodes fade in with stagger
          gsap.to(nodes, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.9,
            stagger: 0.18,
            ease: "power3.out",
          });

          // Connector lines scale in after a small delay
          gsap.to(connectors, {
            scaleX: isMobile ? 1 : 1,
            scaleY: isMobile ? 1 : 1,
            duration: 0.6,
            stagger: 0.18,
            delay: 0.3,
            ease: "power2.out",
          });

          // Start pulsing after everything is visible
          pulses.forEach((pulse, i) => {
            gsap.to(pulse, {
              [isMobile ? "y" : "x"]: isMobile ? "60px" : "80px",
              duration: 1.2,
              repeat: -1,
              delay: 1 + i * 0.35,
              ease: "none",
            });
          });
        },
      });
    },
    { scope: wrapperRef }
  );

  return (
    <div className="arch-wrapper" ref={wrapperRef}>
      <div className="arch-flow">
        {stages.map((stage, i) => (
          <React.Fragment key={stage.title}>
            <div className="arch-node">
              <div className="arch-node-inner">
                <p className="arch-node-label">{stage.label}</p>
                <h4 className="arch-node-title">{stage.title}</h4>
                <p className="arch-node-desc">{stage.desc}</p>
              </div>
            </div>
            {i < stages.length - 1 && (
              <div className="arch-connector">
                <div className="arch-connector-line">
                  <div className="arch-connector-pulse"></div>
                  <div className="arch-connector-arrow"></div>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ArchitectureVisual;
