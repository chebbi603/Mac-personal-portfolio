import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function MagneticButton({ children }) {
    const magnetic = useRef(null);

    useGSAP(() => {
        // iPad style: Fast response, no bounce, feels "sticky"
        const xTo = gsap.quickTo(magnetic.current, "x", { duration: 0.35, ease: "power4.out" });
        const yTo = gsap.quickTo(magnetic.current, "y", { duration: 0.35, ease: "power4.out" });

        const mouseMove = (e) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = magnetic.current.getBoundingClientRect();

            // Calculate distance from center
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);

            // Move the element towards the mouse but dampened (factor of 3 or 4 usually feels good)
            xTo(x / 3);
            yTo(y / 3);
        };

        const mouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        const el = magnetic.current;
        if (el) {
            el.addEventListener("mousemove", mouseMove);
            el.addEventListener("mouseleave", mouseLeave);
        }

        return () => {
            if (el) {
                el.removeEventListener("mousemove", mouseMove);
                el.removeEventListener("mouseleave", mouseLeave);
            }
        };
    }, { scope: magnetic });

    // Use cloneElement to pass the ref to the single child
    return React.cloneElement(children, { ref: magnetic });
}