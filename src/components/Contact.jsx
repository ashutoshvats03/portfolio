"use client";
import { Github, Linkedin, Mail } from "lucide-react";
import CopyEmail from "./CopyEmail";

export default function Contact() {
  return (
    <section id="contact" className="px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-4xl font-bold uppercase tracking-tight md:text-6xl">
          Let&apos;s build
          <br />
          <span className="text-[var(--color-accent)]">something.</span>
        </h2>
        <p className="mt-4 max-w-xl text-[var(--color-muted-fg)]">
          Open to full-stack, backend, and AI engineering roles. Fastest way to reach me is email.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="mailto:contact.ashutosh03@gmail.com"
            className="border-2 border-[var(--color-primary)] bg-[var(--color-primary)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[var(--color-on-primary)] hover:bg-transparent hover:text-[var(--color-primary)]"
          >
            <span className="inline-flex items-center gap-2">
              <Mail size={16} /> Email me
            </span>
          </a>
          <CopyEmail />
          <a
            href="https://github.com/ashutoshvats03"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[var(--color-border)] px-4 py-2 text-xs font-bold uppercase tracking-wider hover:border-[var(--color-primary)]"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ashutosh-vats"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-[var(--color-border)] px-4 py-2 text-xs font-bold uppercase tracking-wider hover:border-[var(--color-primary)]"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
