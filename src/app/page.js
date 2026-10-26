"use client";
import { useState } from "react";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import ProjectCard from "@/components/ProjectCard";
import TechGrid from "@/components/TechGrid";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import { projects } from "@/data/projects";

const filters = ["All", "AI", "Web"];

export default function Home() {
  const [filter, setFilter] = useState("All");
  const visible =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      <Hero />
      <Marquee />

      {/* Projects */}
      <section id="projects" className="px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-4xl font-bold uppercase tracking-tight md:text-6xl">
              Selected
              <br />
              <span className="text-[var(--color-accent)]">work.</span>
            </h2>
            <div className="flex gap-2">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`border-2 px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                    filter === f
                      ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-[var(--color-on-primary)]"
                      : "border-[var(--color-border)] hover:border-[var(--color-primary)]"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t-2 border-[var(--color-border)] px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight md:text-6xl">
            About
            <span className="text-[var(--color-accent)]">.</span>
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--color-muted-fg)] md:text-lg">
            I&apos;m Ashutosh Vats, a developer with a strong focus on backend
            technologies. I leverage problem-solving and logical thinking to
            build scalable, efficient, cost-effective solutions. Passionate about
            robust automation and deployment. Knowledge of system design guides
            my tool and technology choices — and I&apos;m always eager to learn
            new ones.
          </p>
          <div className="mt-10">
            <TechGrid />
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="border-t-2 border-[var(--color-border)] px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-4xl font-bold uppercase tracking-tight md:text-6xl">
            Experience
            <span className="text-[var(--color-accent)]">.</span>
          </h2>
          <div className="mt-10 max-w-3xl">
            <Timeline />
          </div>
        </div>
      </section>

      <Contact />

      <footer className="border-t-2 border-[var(--color-border)] px-4 py-8 text-center text-xs font-medium uppercase tracking-widest text-[var(--color-muted-fg)]">
        © {new Date().getFullYear()} Ashutosh Vats · Built with Next.js
      </footer>
    </>
  );
}
