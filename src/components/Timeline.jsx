"use client";
import { motion, useReducedMotion } from "framer-motion";

const items = [
  { year: "Aug 2024 – Dec 2025", title: "Software Developer", org: "Spatialty.ai", desc: "Built scalable web apps and services; migrated backend from Node.js to Django; shipped internal dashboards." },
  { year: "2022 – 2026", title: "B.Tech", org: "Heritage Institute of Technology, Kolkata", desc: "CGPA 7.3. Covered MERN, DSA, system design." },
  { year: "2021 – 2022", title: "Class XII", org: "Collegiate High School", desc: "81.6%" },
  { year: "2019 – 2020", title: "Class X", org: "Holycross International School", desc: "82.6%" },
];

export default function Timeline() {
  const reduce = useReducedMotion();
  return (
    <div className="relative pl-6">
      <div className="absolute top-0 left-0 h-full w-0.5 bg-[var(--color-border)]" />
      {items.map((it, i) => (
        <motion.div
          key={i}
          initial={reduce ? false : { opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          className="relative mb-6 pl-6"
        >
          <div className="absolute top-1.5 -left-[29px] h-3 w-3 rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)]" />
          <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
            {it.year}
          </div>
          <div className="font-display text-lg font-bold uppercase">{it.title}</div>
          <div className="text-sm font-medium text-[var(--color-muted-fg)]">{it.org}</div>
          <p className="mt-1 text-sm text-[var(--color-muted-fg)]">{it.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}
