"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 400], [0, 80]);

  return (
    <section id="top" className="relative overflow-hidden px-4 pt-28 pb-20 md:px-8 md:pt-36 md:pb-28">
      {/* parallax grid bg */}
      <motion.div
        aria-hidden
        style={reduce ? {} : { y }}
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(to right, #09090B 1px, transparent 1px), linear-gradient(to bottom, #09090B 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </motion.div>

      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-muted-fg)]"
        >
          // Full-stack & AI engineer · Gurugram, India
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[14vw] leading-[0.85] font-extrabold uppercase tracking-tighter md:text-[9rem]"
        >
          Ashutosh
          <br />
          <span className="text-[var(--color-accent)]">Vats</span>
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl text-base text-[var(--color-muted-fg)] md:text-lg"
        >
          I build scalable backends, AI agents, and automation pipelines. Currently shipping at
          Spatialty.ai; previously MERN, Django, LangGraph, and a lot of Docker.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <a
            href="#projects"
            className="border-2 border-[var(--color-primary)] bg-[var(--color-primary)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--color-on-primary)] hover:bg-transparent hover:text-[var(--color-primary)]"
          >
            View work ↓
          </a>
          <a
            href="mailto:contact.ashutosh03@gmail.com"
            className="border-2 border-[var(--color-primary)] bg-transparent px-6 py-3 text-sm font-bold uppercase tracking-wider hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)]"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
