"use client";

import { motion, useReducedMotion } from "framer-motion";
import { dur, ease } from "@/lib/motion";

export default function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: dur.slow, ease: ease, delay }}
    >
      {children}
    </motion.div>
  );
}
