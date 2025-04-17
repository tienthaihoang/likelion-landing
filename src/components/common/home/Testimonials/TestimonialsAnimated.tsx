"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function TestimonialsAnimated({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.5,
        duration: 0.5,
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
