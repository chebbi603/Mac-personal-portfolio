import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

export default function MagneticButton({children}) {
    const magnetic = useRef(null);
    useEffect( () => {
        const xTo = gsap.quickTo(magnetic.current, "x", { duration: 1, ease: "elastic.out(1,1)"})
        const yTo = gsap.quickTo(magnetic.current, "y", { duration: 1, ease: "elastic.out(1,1)"})

        const mouseMove = (e) => {
            const { clientX, clientY } = e;
            const {height, width, left, top} = magnetic.current.getBoundingClientRect();
            const x = clientX - (left + width/2)
            const y = clientY - (top + height/2)
            xTo(x/8);
            yTo(y/4);
            gsap.to(magnetic.current,{scale:1.1,boxShadow:"0px 0px 200px rgba(255, 255, 255, 0.4)"})
        }

        const mouseLeave = (e) => {
            gsap.to(magnetic.current,{scale:1,boxShadow:"0px 0px 200px rgba(255, 255, 255, 0)"})
            xTo(0)
            yTo(0)
        }

        magnetic.current.addEventListener("mousemove", mouseMove)
        magnetic.current.addEventListener("mouseleave", mouseLeave)

        return () => {
            if(magnetic.current!=null){
            magnetic.current.removeEventListener("mousemove", mouseMove)
            magnetic.current.removeEventListener("mouseleave", mouseLeave)
            }
        }
    }, [])

    return (
        React.cloneElement(children, {ref:magnetic})
    )
}