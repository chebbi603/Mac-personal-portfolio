import { IconArrowUp } from "@tabler/icons-react";
import "./scrollresetter.css";
import { useState, useEffect } from "react";

export default function ScrollResetter() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsVisible(window.scrollY > 100);
    });
  }, []);

  return isVisible ? (
    <button
      className="scroll-resetter"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <IconArrowUp size={24} />
    </button>
  ) : (
    <></>
  );
}
