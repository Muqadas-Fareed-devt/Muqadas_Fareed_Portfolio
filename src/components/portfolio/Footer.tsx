import { Github, Linkedin } from "./BrandIcons";

export default function Footer() {
  return (
    <footer className="relative pt-12 pb-8 px-6">
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, #00d4ff, #7b2ff7, transparent)",
        }}
      />
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center">
          Designed & Built by <span className="text-gradient font-semibold">Muqadas Fareed</span> © 2026
        </p>
        <div className="flex gap-3">
          <a
            href="https://github.com/Muqadas-Fareed-devt"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:scale-110 hover:text-[var(--brand-blue)] transition-all"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/muqadas-fareed-24a07837b"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:scale-110 hover:text-[var(--brand-violet)] transition-all"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}