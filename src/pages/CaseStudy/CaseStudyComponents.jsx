import React from "react";
import "./casestudy.css";
import "../../components/ServiceSpectrum/servicespectrum.css";

export const GraphicPlaceholder = ({ text, children, noBorder, disableAnimation }) => (
  <div className={`spectrum-columns ${disableAnimation ? "no-animate" : ""}`}>
    <div className={`merged-card-wrapper ${disableAnimation ? "no-animate" : ""}`} style={{ minHeight: "auto", borderBottom: noBorder ? "none" : undefined }}>
      <div className="spectrum-merged-card" style={{ padding: children ? "0" : undefined, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {text ? <span className="for-label">{text}</span> : children}
      </div>
    </div>
  </div>
);

export const HeroBanner = ({ imgSrc, videoSrc, title, customMedia, containerRef }) => (
  <>
    <div ref={containerRef} className="hero-banner-container" style={{ width: "100%", marginTop: "10vh", marginBottom: "3rem", borderTop: "1px solid rgba(254, 250, 224, 0.15)", borderBottom: "1px solid rgba(254, 250, 224, 0.15)", height: "35vh", minHeight: "200px", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {customMedia ? customMedia : videoSrc ? (
        <video src={videoSrc} autoPlay loop muted playsInline style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      ) : (
        <img src={imgSrc} alt={title || "Banner"} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
      )}
    </div>
    <h2 className="servicespectrum-title" style={{ marginTop: "0" }}>{title}</h2>
  </>
);

export const MergedCard = ({ badge, title, children }) => (
  <div className="spectrum-columns">
    <div className="merged-card-wrapper" style={{ minHeight: "auto" }}>
      <div className="spectrum-merged-card">
        <div className="merged-card-content">
          <div className="merged-badge">{badge}</div>
          <h2 className="merged-title" style={{ fontSize: title && title.length > 25 ? "2.5rem" : "3rem"}}>{title}</h2>
          {children}
        </div>
      </div>
    </div>
  </div>
);

export const IssueColumn = ({ number, title, issueText, last }) => (
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

export const ValueColumn = ({ isPostSwatch, percentage, desc, time }) => {
  const color = isPostSwatch ? "#77e383ff" : "#e96d77";
  return (
    <div className="spectrum-column" style={isPostSwatch ? { gridColumn: "-4 / -2" } : { gridColumn: "2 / -4" }}>
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
