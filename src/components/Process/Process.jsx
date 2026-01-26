import "./process.css";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Process() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const itemsRef = useRef([]);
  const [expandedItem, setExpandedItem] = useState(null);

  const processData = [
    {
      number: "01",
      label: "IDEATE",
      description: "Deep-dive discovery. Using cognitive science principles to ensure we solve the right user problem.",
    },
    {
      number: "02",
      label: "DESIGN",
      description: "Crafting intuitive flows. Focusing on reducing cognitive load and friction.",
    },
    {
      number: "03",
      label: "BUILD",
      description: "Production-grade Engineering. Clean, maintainable Next.js/React code that scales.",
    },
    {
      number: "04",
      label: "SCALE",
      description: "Data-driven iteration. Refining the product based on how real humans use it.",
    },
  ];

  // Scroll-triggered entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial state for items
      gsap.set(itemsRef.current, {
        opacity: 0,
        y: 60,
        filter: "blur(20px)",
      });

      // Animate items on scroll
      // Animate items on scroll
      const mm = gsap.matchMedia();
      mm.add(
        {
           isDesktop: "(min-width: 900px)",
           isMobile: "(max-width: 899px)",
        },
        (context) => {
             let { isMobile } = context.conditions;

             ScrollTrigger.create({
                trigger: containerRef.current,
                start: isMobile ? "top 85%" : "top 80%",
                onEnter: () => {
                  gsap.to(itemsRef.current, {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 0.8,
                    stagger: isMobile ? 0.08 : 0.12,
                    ease: "power3.out",
                  });
                },
              });
        }
      );

      // Parallax title animation - scrolls slower and blurs when overlapped
      if (titleRef.current) {
        gsap.to(titleRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 50%",
            end: "top -20%",
            scrub: true,
          },
          y: 150,
          filter: "blur(20px)",
          opacity: 0,
          ease: "none",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="process-container" ref={containerRef}>
      <h2 className="process-title" ref={titleRef}>Process</h2>

      {/* Expandable List */}
      <div className="process-list">
        {processData.map((item, index) => (
          <div
            key={item.label}
            ref={(el) => (itemsRef.current[index] = el)}
            className={`process-item ${expandedItem === index ? 'expanded' : ''}`}
            onMouseEnter={() => setExpandedItem(index)}
            onMouseLeave={() => setExpandedItem(null)}
          >
            <div className="process-item-content">
              {/* Left side - Text content */}
              <div className="process-item-text">
                <div className="process-item-header">
                  <span className="process-item-number">{item.number}</span>
                  <h3 className="process-item-label">{item.label}</h3>
                </div>
                
                {/* Expanded content - description */}
                <div className="process-item-details">
                  <p className="process-item-description">{item.description}</p>
                </div>
              </div>
              
              {/* Right side - Media placeholder */}
              <div className="process-item-media">
                <div className="media-placeholder">
                  <span>MEDIA</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Process;
