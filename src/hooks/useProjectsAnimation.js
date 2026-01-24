import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const useProjectsAnimation = (containerRef, enabled = true) => {
    useGSAP(
        () => {
            if (!enabled) return;
            const q = gsap.utils.selector(containerRef);
            const sections = gsap.utils.toArray(q(".project-main"));
            const containers = gsap.utils.toArray(q(".project-container"));

            sections.forEach((section, index) => {
                // Entry
                gsap.fromTo(
                    section,
                    { opacity: 0, y: 100 },
                    {
                        scrollTrigger: {
                            trigger: section,
                            start: "top 100%",
                            end: "top 60%",
                            scrub: true,
                        },
                        y: 0,
                        opacity: 1,
                    }
                );
                // Pin & Scroll
                gsap.fromTo(
                    section,
                    { y: 0 },
                    {
                        scrollTrigger: {
                            trigger: containers[index],
                            start: "top 10%",
                            pin: section,
                            end: "80% top 40%",
                            scrub: true,
                        },
                        y: -50,
                    }
                );
                // Exit
                gsap.fromTo(
                    section,
                    { opacity: 1 },
                    {
                        scrollTrigger: {
                            trigger: containers[index],
                            start: "bottom 60%",
                            end: "80% top 90%",
                            scrub: true,
                        },
                        opacity: 0,
                    }
                );
            });

            // Image Container Animation
            q(".project-image-container").forEach((container) => {
                gsap.fromTo(
                    container,
                    { opacity: 0, y: 50 },
                    {
                        scrollTrigger: {
                            trigger: container,
                            start: "top 100% bottom",
                            scrub: true,
                            end: "top 60%",
                        },
                        y: -50,
                        delay: 2,
                        opacity: 1,
                    }
                );
                gsap.fromTo(
                    container,
                    { y: -50, opacity: 1 },
                    {
                        scrollTrigger: {
                            trigger: container,
                            start: "50% 40%",
                            end: "50% 20%",
                            scrub: true,
                        },
                        y: -50,
                        opacity: 0,
                    }
                );
            });

            // Description Animation
            q(".project-description").forEach((desc) => {
                gsap.fromTo(
                    desc,
                    { opacity: 0, y: 100 },
                    {
                        scrollTrigger: {
                            trigger: desc,
                            start: "top 100% bottom",
                            scrub: true,
                            end: "top 70%",
                        },
                        y: 0,
                        delay: 2,
                        opacity: 1,
                    }
                );
                gsap.fromTo(
                    desc,
                    { opacity: 1, y: 0 },
                    {
                        scrollTrigger: {
                            trigger: desc,
                            start: "top 20%",
                            end: "top 10%",
                            scrub: true,
                        },
                        y: -10,
                        opacity: 0,
                    }
                );
            });
        },
        { scope: containerRef, dependencies: [enabled] }
    );
};
