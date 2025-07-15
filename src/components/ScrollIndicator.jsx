"use client";
import { motion, useScroll } from "framer-motion";

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 w-full z-50"
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "left",
        background:
          "linear-gradient(90deg, #00ffff, #8a2be2, #00ffff)",
        boxShadow: "0 0 10px #00ffff, 0 0 20px #8a2be2",
      }}
    />
  );
}
