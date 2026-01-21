"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export default function AchievementsAnimated({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <motion.div
      className="relative grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
