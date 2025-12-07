import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function MagneticButton({ children }) {
    const magnetic = useRef(null);

    useGSAP(() => {
        const xTo = gsap.quickTo(magnetic.current, "x", { duration: 1, ease: "elastic.out(1,1)" });
        const yTo = gsap.quickTo(magnetic.current, "y", { duration: 1, ease: "elastic.out(1,1)" });

        const mouseMove = (e) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = magnetic.current.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x / 8);
            yTo(y / 4);
            gsap.to(magnetic.current, { scale: 1.1, boxShadow: "0px 0px 200px rgba(255, 255, 255, 0.4)" });
        };

        const mouseLeave = () => {
            gsap.to(magnetic.current, { scale: 1, boxShadow: "0px 0px 200px rgba(255, 255, 255, 0)" });
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

    return React.cloneElement(children, { ref: magnetic });
}