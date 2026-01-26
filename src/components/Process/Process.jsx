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
      description: "Research, brainstorm, and define the vision through discovery sessions and user insights.",
    },
    {
      number: "02",
      label: "DESIGN",
      description: "Craft intuitive interfaces and experiences that resonate with users and align with goals.",
    },
    {
      number: "03",
      label: "BUILD",
      description: "Transform designs into performant, scalable code with attention to every detail.",
    },
    {
      number: "04",
      label: "SCALE",
      description: "Optimize, iterate, and grow the product based on real-world feedback and metrics.",
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
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(itemsRef.current, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
          });
        },
      });

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
      <h2 className="section-title" ref={titleRef}>Process</h2>

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
