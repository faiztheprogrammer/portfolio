// Global motion tokens — every animation uses these (design/DESIGN-SYSTEM.md §2)
export const ease: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];

export const dur = { fast: 0.15, base: 0.25, slow: 0.4 } as const;

export const spring = {
  type: "spring",
  stiffness: 260,
  damping: 24,
} as const;

export const reveal = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: dur.slow, ease },
} as const;

export const stagger = {
  animate: { transition: { staggerChildren: 0.06 } },
} as const;

export const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: dur.slow, ease },
} as const;
