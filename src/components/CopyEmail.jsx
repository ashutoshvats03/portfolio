"use client";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

export default function CopyEmail({ email = "contact.ashutosh03@gmail.com" }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const ta = document.createElement("textarea");
        ta.value = email;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore
    }
  }
  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-2 border-2 border-[var(--color-primary)] px-4 py-2 text-xs font-bold uppercase tracking-wider hover:bg-[var(--color-primary)] hover:text-[var(--color-on-primary)]"
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}
