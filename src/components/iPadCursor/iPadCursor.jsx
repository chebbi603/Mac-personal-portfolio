import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./iPadCursor.css";
import { IconArrowUpRight } from "@tabler/icons-react"; // Import used icons directly

gsap.registerPlugin(useGSAP);

const IPadCursor = () => {
  const cursorRef = useRef(null);
  
  // Internal state for "custom" cursor content (derived from DOM)
  const [customState, setCustomState] = useState({ text: "", icon: null, active: false });

  // Refs for performant tracking
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorState = useRef({
    type: "default", // default | text | button | custom
    snappedElement: null
  });

  useGSAP(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Movement (Position) - snappy position
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.15, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.15, ease: "power3.out" });

    // -----------------------------------------------------------------------
    // MOUSE MOVE: Track Position
    // -----------------------------------------------------------------------
    const handleMouseMove = (e) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;
    };

    // -----------------------------------------------------------------------
    // RECONCILE STATE: The Brain
    // -----------------------------------------------------------------------
    const updateCursorState = (target) => {
        if (!target) return;

        // 1. CHECK FOR CUSTOM CURSOR (Priority 1)
        const customEl = target.closest("[data-cursor='custom']");
        if (customEl) {
            if (cursorState.current.type !== "custom" || cursorState.current.snappedElement !== customEl) {
                cursorState.current.type = "custom";
                cursorState.current.snappedElement = customEl;
                
                // Extract Content
                const text = customEl.getAttribute("data-cursor-text") || "";
                // Logic to map icon name to component could go here, for now specific check
                const iconName = customEl.getAttribute("data-cursor-icon");
                const icon = iconName === "arrow-up-right" ? IconArrowUpRight : null;

                setCustomState({ text, icon, active: true });

                // Animate to Custom
                gsap.to(cursor, {
                    width: "auto",
                    height: 56,
                    borderRadius: 28, // Pill
                    paddingLeft: 24,
                    paddingRight: 8,
                    backgroundColor: "#fefae0", // Cream
                    backdropFilter: "blur(12px)",
                    mixBlendMode: "normal",
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
            return;
        }

        // 2. CHECK FOR CLICKABLES (Priority 2)
        const clickable = target.closest("a, button, .link, .menu-link-element, .persona-switcher-wrapper, .persona-item, .project-item");
        if (clickable && !clickable.classList.contains("no-snap")) {
            if (cursorState.current.type !== "button" || cursorState.current.snappedElement !== clickable) {
               cursorState.current.type = "button";
               cursorState.current.snappedElement = clickable;
               setCustomState(prev => ({ ...prev, active: false }));

               const rect = clickable.getBoundingClientRect();
               gsap.to(cursor, {
                 width: rect.width + 12,
                 height: rect.height + 12,
                 borderRadius: "12px", 
                 backgroundColor: "rgba(255, 255, 255, 0.1)",
                 backdropFilter: "blur(0px)",
                 mixBlendMode: "normal",
                 padding: 0,
                 duration: 0.3, 
                 ease: "expo.out"
               });
            }
            return;
        }

        // 3. CHECK FOR TEXT (Priority 3)
        const textElement = target.closest("p, span, h1, h2, h3, h4, h5, h6, input, textarea");
        if (textElement) {
            if (cursorState.current.type !== "text") {
                cursorState.current.type = "text";
                cursorState.current.snappedElement = null;
                setCustomState(prev => ({ ...prev, active: false }));

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
            }
            return;
        }

        // 4. DEFAULT
        if (cursorState.current.type !== "default") {
            cursorState.current.type = "default";
            cursorState.current.snappedElement = null;
            setCustomState(prev => ({ ...prev, active: false }));

            gsap.to(cursor, {
                width: 20,
                height: 20,
                borderRadius: "50px",
                backgroundColor: "rgba(255, 255, 255, 1)",
                mixBlendMode: "difference",
                backdropFilter: "blur(0px)",
                padding: 0,
                duration: 0.3, 
                ease: "expo.out"
            });
        }
    };

    // -----------------------------------------------------------------------
    // EVENTS
    // -----------------------------------------------------------------------
    const handleMouseOver = (e) => {
        updateCursorState(e.target);
    };

    const tick = () => {
        // If snapped to a button, follow the element center
        if (cursorState.current.type === "button" && cursorState.current.snappedElement) {
             const rect = cursorState.current.snappedElement.getBoundingClientRect();
             xTo(rect.left + rect.width / 2);
             yTo(rect.top + rect.height / 2);
        } 
        // If Custom, follow mouse (or could be snapped, but usually follows mouse for cards)
        else {
             xTo(mousePos.current.x);
             yTo(mousePos.current.y);
        }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver); // Capture bubbling events
    gsap.ticker.add(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      gsap.ticker.remove(tick);
    };
  }, { scope: cursorRef }); // Computed deps usually empty for this global logic

  // Effect to re-measure width if text changes while active (reactive)
  useEffect(() => {
    if (customState.active && cursorRef.current) {
         // Force width auto refresh
         gsap.to(cursorRef.current, { width: "auto", duration: 0.2, overwrite: "auto" });
    }
  }, [customState.text]);


  return (
    <div ref={cursorRef} className={`ipad-cursor ${customState.active ? "custom-mode" : ""}`}>
      {customState.active && (
        <div className="ipad-cursor-content">
          <span className="cursor-text">{customState.text}</span>
          {customState.icon && (
             <div className="cursor-icon">
                <customState.icon size={24} />
             </div>
          )}
        </div>
      )}
    </div>
  );
};

export default IPadCursor;
