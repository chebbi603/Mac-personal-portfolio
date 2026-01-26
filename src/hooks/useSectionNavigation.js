import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const useSectionNavigation = (containerRef, colorConfig, enabled = true, themeColors = null) => {
    useGSAP(
        () => {
            if (!enabled) return;
            const q = gsap.utils.selector(containerRef);

            // Determine base colors (use theme colors if provided, else defaults)
            const baseNavbarColor = themeColors?.navbarBase
                ? `${themeColors.navbarBase}cc` // Add some transparency
                : "rgba(0, 0, 0, 0.8)";
            const baseAppHeaderColor = themeColors?.navbarBase || "black";

            const setupColorTransition = (targetSelector, initialColor, config) => {
                config.forEach(({ trigger, color }) => {
                    gsap.to(q(targetSelector), {
                        scrollTrigger: {
                            trigger: q(trigger),
                            start: "top 80%",
                            end: "top 10%",
                            scrub: true,
                        },
                        backgroundColor: color,
                        immediateRender: false,
                    });
                });
            };

            // Initial Scroll: Transparent -> Base Dark Color (0-100px)
            gsap.to(q(".headerc"), {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "100px top",
                    scrub: true,
                },
                backgroundColor: baseNavbarColor,
            });

            gsap.to(q(".App-header"), {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "100px top",
                    scrub: true,
                },
                backgroundColor: baseAppHeaderColor,
            });

            setupColorTransition(".headerc", baseNavbarColor, colorConfig);
            setupColorTransition(".App-header", baseAppHeaderColor, colorConfig);
        },
        { scope: containerRef, dependencies: [colorConfig, enabled, themeColors] }
    );
};

