"use client";

import Timeline from "@/components/Timeline";

const education = [
  { institution: "Heritage Institute of Technology, Kolkata", period: "2022 – 2026", detail: "B.Tech, CGPA 7.3" },
  { institution: "Collegiate High School", period: "2021 – 2022", detail: "Class XII — 81.6%" },
  { institution: "Holycross International School", period: "2019 – 2020", detail: "Class X — 82.6%" },
];

const skills = [
  "JavaScript", "Python", "Java", "SQL",
  "React", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "Django",
  "LangGraph", "LangChain", "PostgreSQL", "MongoDB", "Redis", "RabbitMQ",
  "Docker", "AWS EC2", "Socket.IO",
];

export default function Resume() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 md:px-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="font-display text-4xl font-bold uppercase tracking-tight md:text-6xl">
          Resume<span className="text-[var(--color-accent)]">.</span>
        </h1>
        <button
          onClick={() => typeof window !== "undefined" && window.print()}
          className="border-2 border-[var(--color-primary)] bg-[var(--color-primary)] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[var(--color-on-primary)] print:hidden"
        >
          Print / Save PDF
        </button>
      </div>

      <section className="mb-10">
        <h2 className="mb-4 font-display text-2xl font-bold uppercase">Experience</h2>
        <Timeline />
      </section>

      <section className="mb-10">
        <h2 className="mb-4 font-display text-2xl font-bold uppercase">Education</h2>
        <div className="space-y-3">
          {education.map((e) => (
            <div key={e.institution} className="border-l-2 border-[var(--color-accent)] pl-4">
              <div className="font-bold">{e.institution}</div>
              <div className="text-sm text-[var(--color-muted-fg)]">
                {e.period} · {e.detail}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-display text-2xl font-bold uppercase">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((s) => (
            <span
              key={s}
              className="border border-[var(--color-border)] px-2 py-1 text-xs font-medium"
            >
              {s}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
