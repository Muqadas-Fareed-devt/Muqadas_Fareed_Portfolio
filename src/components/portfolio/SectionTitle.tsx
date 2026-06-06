export default function SectionTitle({ eyebrow, title }: { eyebrow?: string; title: string }) {
  return (
    <div className="text-center mb-14">
      {eyebrow && (
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-5xl font-extrabold inline-block relative">
        <span className="text-gradient">{title}</span>
        <span
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-24 rounded-full"
          style={{ background: "var(--gradient-primary)" }}
        />
      </h2>
    </div>
  );
}