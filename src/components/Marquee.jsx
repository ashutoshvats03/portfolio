export default function Marquee() {
  const items = [
    "Next.js", "React", "TypeScript", "Python", "LangGraph", "LangChain",
    "Node.js", "Django", "PostgreSQL", "MongoDB", "Redis", "RabbitMQ",
    "Docker", "AWS", "Socket.IO", "Tailwind", "Prisma", "FastAPI",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-y-2 border-[var(--color-border)] bg-[var(--color-primary)] py-3 text-[var(--color-on-primary)]">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {doubled.map((t, i) => (
          <span key={i} className="font-display text-sm font-bold uppercase tracking-widest">
            {t} <span className="text-[var(--color-accent)]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
