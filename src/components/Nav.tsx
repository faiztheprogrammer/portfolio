"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { dur, ease } from "@/lib/motion";

const links = [
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#experience", label: "Experience" },
  { href: "#about", label: "About" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(() =>
    typeof document === "undefined"
      ? "dark"
      : ((document.documentElement.dataset.theme as "dark" | "light") ?? "dark"),
  );
  const reduced = useReducedMotion();

  // React 19 hydration can strip the attribute the pre-paint script set on
  // <html>; re-applying after every commit keeps DOM and state in sync.
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-10 backdrop-blur-md transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-bg/80" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8 lg:px-12"
      >
        <Link
          href="#main"
          className="font-display text-lg font-bold tracking-tight text-fg"
        >
          FR<span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-body transition-colors hover:text-fg"
            >
              {l.label}
            </a>
          ))}
          <Link
            href="/resume"
            className="text-sm font-medium text-body transition-colors hover:text-fg"
          >
            Resume
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            suppressHydrationWarning
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line text-body transition-colors hover:border-line-strong hover:text-fg"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="#contact"
            className="hidden h-11 cursor-pointer items-center rounded-full bg-accent px-6 text-sm font-semibold text-on-accent transition-colors hover:bg-accent-hover md:inline-flex"
          >
            Contact
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line text-body md:hidden"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: dur.fast }}
            className="fixed inset-0 z-20 flex flex-col bg-bg md:hidden"
          >
            <div className="flex h-16 items-center justify-between px-5">
              <span className="font-display text-lg font-bold text-fg">
                FR<span className="text-accent">.</span>
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line text-body"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-2 px-8">
              {[...links, { href: "/resume", label: "Resume" }, { href: "#contact", label: "Contact" }].map(
                (l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: reduced ? 0 : 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: dur.base, ease: ease, delay: i * 0.06 }}
                    className="py-3 font-display text-3xl font-bold text-fg"
                  >
                    {l.label}
                  </motion.a>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
