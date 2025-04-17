"use client";

import { useScroll, motion, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 right-0 top-[var(--navbar-height)] bg-[#ff7100] h-0.5 origin-left z-50"
      style={{ scaleX: scaleX }}
    ></motion.div>
  );
}
