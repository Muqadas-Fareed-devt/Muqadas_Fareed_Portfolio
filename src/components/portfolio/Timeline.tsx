import TiltCard from "./TiltCard";

export interface TimelineItem {
  title: string;
  subtitle: string;
  meta?: string;
  body?: string;
  highlight?: boolean;
}

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative max-w-3xl mx-auto">
      <div
        className="absolute left-4 sm:left-6 top-0 bottom-0 w-px"
        style={{
          background:
            "linear-gradient(to bottom, transparent, #00d4ff 15%, #7b2ff7 85%, transparent)",
        }}
      />
      <div className="flex flex-col gap-8">
        {items.map((it, i) => (
          <div key={i} className="relative pl-14 sm:pl-20">
            <div
              className="absolute left-2 sm:left-4 top-6 w-5 h-5 rounded-full animate-pulse-glow"
              style={{ background: "var(--gradient-primary)" }}
            />
            <TiltCard intensity={5}>
              <div
                className={`glass-card glow-border-hover rounded-2xl p-6 ${
                  it.highlight ? "animate-pulse-glow" : ""
                }`}
              >
                {it.meta && (
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    {it.meta}
                  </p>
                )}
                <h3 className="text-xl font-bold mb-1">{it.title}</h3>
                <p className="text-gradient font-semibold text-sm mb-2">{it.subtitle}</p>
                {it.body && (
                  <p className="text-muted-foreground text-sm">{it.body}</p>
                )}
              </div>
            </TiltCard>
          </div>
        ))}
      </div>
    </div>
  );
}