import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const useSectionNavigation = (containerRef, colorConfig, enabled = true) => {
    useGSAP(
        () => {
            if (!enabled) return;
            const q = gsap.utils.selector(containerRef);

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
                backgroundColor: "rgba(0, 0, 0, 0.8)",
            });

            gsap.to(q(".App-header"), {
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "100px top",
                    scrub: true,
                },
                backgroundColor: "black",
            });

            setupColorTransition(".headerc", "rgba(0, 0, 0, 0.8)", colorConfig);
            setupColorTransition(".App-header", "black", colorConfig);
        },
        { scope: containerRef, dependencies: [colorConfig, enabled] }
    );
};
