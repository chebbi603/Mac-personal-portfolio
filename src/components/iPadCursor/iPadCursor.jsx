import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useCursor } from "../../context/CursorContext";
import "./iPadCursor.css";

gsap.registerPlugin(useGSAP);

const IPadCursor = () => {
  const cursorRef = useRef(null);
  const { cursorType, cursorText, cursorIcon: Icon } = useCursor();
  
  // State refs for performant tracking
  const mousePos = useRef({ x: 0, y: 0 });
  const targetRef = useRef(null); // The element we are snapped to
  const isSnapped = useRef(false);

  useGSAP(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Movement (Position) - snappy position
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3.out" });

    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    const handleMouseOver = (e) => {
      // If we are in 'custom' mode, ignore generic snapping to avoid conflict
      if (cursorType === "custom") return;

      let target = e.target;
      if (target.nodeType !== 1) { 
        if (target.parentElement) target = target.parentElement;
        else return;
      }

      // 1. CLICKABLES
      const clickable = target.closest("a, button, .link, .menu-link-element, .persona-switcher-wrapper, .persona-item, .project-item");
      if (clickable) {
        targetRef.current = clickable;
        isSnapped.current = true;
        
        const rect = clickable.getBoundingClientRect();
        gsap.to(cursor, {
          width: rect.width + 12,
          height: rect.height + 12,
          borderRadius: "12px", 
          backgroundColor: "rgba(0, 0, 0, 0.08)",
          backdropFilter: "blur(0px)",
          mixBlendMode: "normal",
          padding: 0,
          duration: 0.3, 
          ease: "expo.out"
        });
        return;
      }

      // 2. TEXT
      const textElement = target.closest("p, span, h1, h2, h3, h4, h5, h6, input, textarea");
      if (textElement) {
        targetRef.current = null;
        isSnapped.current = false;
        
        gsap.to(cursor, {
          width: 4,
          height: 24,
          borderRadius: 2,
          backgroundColor: "#fefae0",
          mixBlendMode: "difference",
          padding: 0,
          duration: 0.3, 
          ease: "expo.out"
        });
        return;
      }
      
      // 3. DEFAULT
      targetRef.current = null;
      isSnapped.current = false;
      
      gsap.to(cursor, {
        width: 20,
        height: 20,
        borderRadius: "50%",
        backgroundColor: "rgba(255, 255, 255, 1)",
        mixBlendMode: "difference",
        backdropFilter: "blur(0px)",
        padding: 0,
        duration: 0.3, 
        ease: "expo.out"
      });
    };

    const tick = () => {
      if (cursorType === "custom") {
        // In custom mode, just follow mouse
        xTo(mousePos.current.x);
        yTo(mousePos.current.y);
        return;
      }

      if (isSnapped.current && targetRef.current) {
        const rect = targetRef.current.getBoundingClientRect();
        xTo(rect.left + rect.width / 2);
        yTo(rect.top + rect.height / 2);
      } else {
        xTo(mousePos.current.x);
        yTo(mousePos.current.y);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    gsap.ticker.add(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      gsap.ticker.remove(tick);
    };
  }, { scope: cursorRef, dependencies: [cursorType] }); // Re-run if type changes

  // Handle Custom State Transitions via Effect
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    if (cursorType === "custom") {
      gsap.to(cursor, {
        width: "auto",
        height: 56,
        borderRadius: 50,
        paddingLeft: 24,
        paddingRight: 8,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(12px)",
        mixBlendMode: "normal",
        duration: 0.4,
        ease: "elastic.out(1, 0.75)"
      });
    } else {
        // Reset handled by mouseover logic mostly, but good to reset basic props if needed
    }
  }, [cursorType]);


  return (
    <div ref={cursorRef} className={`ipad-cursor ${cursorType === "custom" ? "custom-mode" : ""} ${cursorType === "text" ? "text-mode" : ""}`}>
      {cursorType === "custom" && (
        <div className="ipad-cursor-content">
          <span className="cursor-text">{cursorText}</span>
          {Icon && (
             <div className="cursor-icon">
                <Icon size={24} />
             </div>
          )}
        </div>
      )}
    </div>
  );
};

export default IPadCursor;
