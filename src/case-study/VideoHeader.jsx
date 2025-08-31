import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./casestudy.css";
export default function VideoHeader({ src }) {
  useGSAP(() => {
    let tl = gsap.timeline({
      defaults: { duration: 1 },
      scrollTrigger: {
        trigger: ".video-container",
        start: "top top",
        end: "bottom bottom",
        pin: true,
        scrub: true,
      },
    });

    tl.fromTo(
      ".video-file",
      {
        currentTime: 0.001,
        scale: 0.7,
        y: 110,
      },
      {
        currentTime: 3,
        scale: 1,
        y: 100,
      }
    );
  });
  return (
    <div className="section-content video-container">
      <video className="video-file" src={src} loop muted />   </div>
  );
}
