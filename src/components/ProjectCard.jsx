"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="group relative flex flex-col gap-3 border-2 border-[var(--color-border)] bg-[var(--color-card)] p-5 transition-colors hover:border-[var(--color-primary)]"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-display text-xl font-bold uppercase tracking-tight">
          {project.title}
        </h3>
        {project.status === "in-progress" && (
          <span className="border border-[var(--color-accent)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[var(--color-accent)]">
            WIP
          </span>
        )}
      </div>
      <p className="text-sm text-[var(--color-muted-fg)]">{project.summary}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="border border-[var(--color-border)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider"
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mt-auto flex gap-3 pt-2 text-xs font-bold uppercase tracking-wider">
        {project.repo && (
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-[var(--color-accent)]"
          >
            Code <ArrowUpRight size={12} />
          </a>
        )}
        {!project.repo && (
          <span className="text-[var(--color-muted-fg)]">Private</span>
        )}
      </div>
    </motion.article>
  );
}
