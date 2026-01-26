import React, { createContext, useContext, useRef, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const TransitionContext = createContext();

export const useTransitionCursor = () => useContext(TransitionContext);

export const TransitionProvider = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const curtainRef = useRef(null);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Track current path to detect when route change is actually complete
    const [currentPath, setCurrentPath] = useState(location.pathname);

    // Reveal Animation (On new page load)
    // This runs automatically whenever the location path changes
    useEffect(() => {
        if (location.pathname !== currentPath) {
            setCurrentPath(location.pathname);
            // Wait a tiny bit for React to render new route, then reveal
            // Force instant coverage first (safety)
            gsap.set(curtainRef.current, { scaleY: 1, transformOrigin: "bottom center" });

            gsap.to(curtainRef.current, {
                scaleY: 0,
                duration: 1.0, // Faster reveal
                ease: "power4.inOut",
                delay: 0.1,
                transformOrigin: "bottom center"
            });
        }
    }, [location.pathname, currentPath]);

    // Navigate Function (Triggered by links/cards)
    const transitionTo = (path) => {
        if (path === location.pathname) return; // Ignore same page clicks
        if (isTransitioning) return;

        setIsTransitioning(true);

        // Cover Animation (Before navigation)
        gsap.fromTo(
            curtainRef.current,
            {
                scaleY: 0,
                transformOrigin: "top center"
            },
            {
                scaleY: 1,
                duration: 0.8, // Faster cover
                ease: "power4.inOut",
                onComplete: () => {
                    navigate(path);
                    setIsTransitioning(false);
                    // Note: The useEffect above will handle the reveal once route changes
                }
            }
        );
    };

    return (
        <TransitionContext.Provider value={{ transitionTo }}>
            {/* The Curtain is part of the provider layout now */}
            <div
                ref={curtainRef}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    backgroundColor: "#000",
                    zIndex: 9998,
                    pointerEvents: "none",
                    transform: "scaleY(0)", // Start hidden
                    transformOrigin: "top center"
                }}
            />
            {children}
        </TransitionContext.Provider>
    );
};
