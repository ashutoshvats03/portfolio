"use client";
import { motion, useReducedMotion } from "framer-motion";

const groups = [
  { label: "Languages", items: ["JavaScript", "Python", "Java", "SQL"] },
  { label: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Redux"] },
  { label: "Backend", items: ["Node.js", "Express.js", "Django", "FastAPI", "LangGraph", "LangChain"] },
  { label: "Data", items: ["PostgreSQL", "MongoDB", "Redis", "RabbitMQ"] },
  { label: "DevOps", items: ["Docker", "AWS EC2", "Git", "Linux"] },
];

export default function TechGrid() {
  const reduce = useReducedMotion();
  return (
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {groups.map((g, gi) => (
        <motion.div
          key={g.label}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: gi * 0.05 }}
          className="border-2 border-[var(--color-border)] p-4"
        >
          <div className="mb-3 text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
            {g.label}
          </div>
          <ul className="flex flex-wrap gap-1.5">
            {g.items.map((it) => (
              <li
                key={it}
                className="border border-[var(--color-border)] px-2 py-1 text-xs font-medium"
              >
                {it}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
