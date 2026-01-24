import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const useScrollFadeIn = (containerRef, selector, vars = {}, enabled = true) => {
    useGSAP(
        () => {
            if (!enabled) return;
            const q = gsap.utils.selector(containerRef);
            const elements = q(selector);

            elements.forEach((el) => {
                gsap.fromTo(
                    el,
                    { opacity: 0, scale: 0.8, ...vars.from },
                    {
                        scrollTrigger: {
                            trigger: el,
                            start: "top 90%",
                            end: "bottom 50%",
                            scrub: true,
                            ...vars.scrollTrigger,
                        },
                        opacity: 1,
                        scale: 1,
                        ...vars.to,
                    }
                );
            });
        },
        { scope: containerRef, dependencies: [enabled] }
    );
};
