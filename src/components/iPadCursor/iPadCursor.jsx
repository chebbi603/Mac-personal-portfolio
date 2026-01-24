import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import "./iPadCursor.css";
import { IconArrowUpRight } from "@tabler/icons-react";

const IPadCursor = () => {
  const cursorRef = useRef(null);
  const contentRef = useRef(null);
  const [cursorState, setCursorState] = useState({
    type: "default",
    text: ""
  });
  
  const mousePos = useRef({ x: 0, y: 0 });
  const currentType = useRef("default");
  const snappedEl = useRef(null);
  const tweenRef = useRef(null); // Store current tween

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Position animation using quickSetter for better performance
    let xSet = gsap.quickSetter(cursor, "x", "px");
    let ySet = gsap.quickSetter(cursor, "y", "px");
    let currentX = 0, currentY = 0;
    let targetX = 0, targetY = 0;

    const moveCursor = () => {
      if (currentType.current === "button" && snappedEl.current) {
        try {
          const rect = snappedEl.current.getBoundingClientRect();
          targetX = rect.left + rect.width / 2;
          targetY = rect.top + rect.height / 2;
        } catch (e) {
          snappedEl.current = null;
        }
      } else {
        targetX = mousePos.current.x;
        targetY = mousePos.current.y;
      }
      
      // Lerp for smooth movement
      currentX += (targetX - currentX) * 0.2;
      currentY += (targetY - currentY) * 0.2;
      xSet(currentX);
      ySet(currentY);
      
      requestAnimationFrame(moveCursor);
    };
    
    const animationId = requestAnimationFrame(moveCursor);

    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    // Unified animation function that properly kills previous tweens
    const animateCursor = (props) => {
      // Kill any existing tween
      if (tweenRef.current) {
        tweenRef.current.kill();
      }
      // Create new tween and store reference
      tweenRef.current = gsap.to(cursor, {
        ...props,
        duration: 0.35,
        ease: "power3.out"
      });
    };

    const handleMouseOver = (e) => {
      let target = e.target;
      
      // Safety check for text nodes
      if (!target || target.nodeType !== 1) {
        if (target && target.parentNode && target.parentNode.nodeType === 1) {
          target = target.parentNode;
        } else {
          return;
        }
      }

      try {
        // 1. CUSTOM
        const customEl = target.closest("[data-cursor='custom']");
        if (customEl) {
          if (currentType.current !== "custom" || snappedEl.current !== customEl) {
            currentType.current = "custom";
            snappedEl.current = customEl;
            const text = customEl.getAttribute("data-cursor-text") || "";
            
            // Update React state first
            setCursorState({ type: "custom", text });
            
            // Double RAF: First waits for React to schedule render, second waits for paint
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                // FLIP: Measure what the auto width would be
                const contentEl = cursor.querySelector('.ipad-cursor-content');
                const currentWidth = cursor.offsetWidth;
                
                // Temporarily set to auto to measure true content width
                const originalOverflow = cursor.style.overflow;
                cursor.style.overflow = "visible";
                cursor.style.width = "auto";
                cursor.style.height = "56px";
                cursor.style.paddingLeft = "16px";
                cursor.style.paddingRight = "8px";
                
                // Measure content width + padding (16 + 8 = 24)
                const targetWidth = contentEl ? contentEl.scrollWidth + 24 : cursor.offsetWidth;
                
                // Reset to current state for animation
                cursor.style.overflow = originalOverflow;
                cursor.style.width = currentWidth + "px";
                cursor.style.height = "";
                cursor.style.paddingLeft = "";
                cursor.style.paddingRight = "";
                
                // Animate to measured values
                animateCursor({
                  width: targetWidth,
                  height: 56,
                  borderRadius: 28,
                  paddingLeft: 16,
                  paddingRight: 0,
                  backgroundColor: "#fefae0"
                });
              });
            });
          }
          return;
        }

        // 2. BUTTON
        const clickable = target.closest("a, button, .link, .menu-link-element, .persona-switcher-wrapper, .persona-item, .project-item");
        if (clickable && !clickable.classList.contains("no-snap")) {
          if (currentType.current !== "button" || snappedEl.current !== clickable) {
            currentType.current = "button";
            snappedEl.current = clickable;
            setCursorState({ type: "button", text: "" });
            const rect = clickable.getBoundingClientRect();
            animateCursor({
              width: rect.width + 12,
              height: rect.height + 12,
              borderRadius: 12,
              paddingLeft: 0,
              paddingRight: 0,
              backgroundColor: "rgba(255, 255, 255, 0.2)"
            });
          }
          return;
        }

        // 3. TEXT
        const textEl = target.closest("p, span, h1, h2, h3, h4, h5, h6, input, textarea");
        if (textEl) {
          if (currentType.current !== "text") {
            currentType.current = "text";
            snappedEl.current = null;
            setCursorState({ type: "text", text: "" });
            animateCursor({
              width: 4,
              height: 24,
              borderRadius: 2,
              paddingLeft: 0,
              paddingRight: 0,
              backgroundColor: "#fefae0"
            });
          }
          return;
        }

        // 4. DEFAULT
        if (currentType.current !== "default") {
          currentType.current = "default";
          snappedEl.current = null;
          setCursorState({ type: "default", text: "" });
          animateCursor({
            width: 20,
            height: 20,
            borderRadius: 50,
            paddingLeft: 0,
            paddingRight: 0,
            backgroundColor: "rgba(255, 255, 255, 1)"
          });
        }
      } catch (e) {
        console.warn("Cursor error:", e);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      cancelAnimationFrame(animationId);
      if (tweenRef.current) tweenRef.current.kill();
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <div ref={cursorRef} className={`ipad-cursor ${cursorState.type === "custom" ? "custom-mode" : ""}`}>
      <div ref={contentRef} className="ipad-cursor-content">
        <span className="cursor-text">{cursorState.text}</span>
        <div className="cursor-icon">
          <IconArrowUpRight size={24} />
        </div>
      </div>
    </div>
  );
};

export default IPadCursor;
