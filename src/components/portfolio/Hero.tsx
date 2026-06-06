import { useEffect, useState, lazy, Suspense } from "react";
import { ArrowDown, Download } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import profileImg from "@/assets/profile.jpeg";

const ParticleBackground = lazy(() => import("./ParticleBackground"));

const roles = [
  "Full Stack Web Developer",
  "Python Developer",
  "Flask & React Engineer",
];

function useTypewriter() {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const speed = deleting ? 40 : 80;
    const t = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setRoleIdx((i) => (i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, roleIdx]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12"
    >
      {/* Particle background */}
      <Suspense fallback={null}>
        <div className="absolute inset-0 z-0">
          <ParticleBackground />
        </div>
      </Suspense>

      {/* Floating orbs */}
      <div
        className="floating-orb animate-drift"
        style={{ top: "10%", left: "10%", width: 400, height: 400, background: "#00d4ff" }}
      />
      <div
        className="floating-orb animate-drift"
        style={{
          bottom: "10%",
          right: "10%",
          width: 500,
          height: 500,
          background: "#7b2ff7",
          animationDelay: "3s",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Profile photo with rotating gradient border */}
        <div className="relative mx-auto mb-8 w-40 h-40 sm:w-48 sm:h-48">
          <div
            className="absolute inset-0 rounded-full animate-spin-slow"
            style={{
              background:
                "conic-gradient(from 0deg, #00d4ff, #7b2ff7, #00d4ff)",
              padding: 3,
            }}
          >
            <div className="w-full h-full rounded-full bg-[var(--bg-deep)]" />
          </div>
          <div
            className="absolute inset-0 rounded-full blur-2xl opacity-60"
            style={{ background: "var(--gradient-primary)" }}
          />
          <img
            src={profileImg}
            alt="Muqadas Fareed"
            className="absolute inset-1.5 rounded-full object-cover w-[calc(100%-12px)] h-[calc(100%-12px)]"
          />
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4">
          <span className="text-gradient">Muqadas Fareed</span>
        </h1>

        <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
          <span className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground">
            {typed}
            <span className="inline-block w-0.5 h-6 sm:h-8 bg-[var(--brand-blue)] ml-1 align-middle animate-pulse" />
          </span>
        </div>

        <p
          className="max-w-2xl mx-auto text-muted-foreground text-base sm:text-lg mb-10 animate-fade-in"
          style={{ animationDelay: "0.6s", animationFillMode: "backwards" }}
        >
          Crafting modern, performant web experiences with React, Flask, and Python — from Shikarpur, Pakistan.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
          <a
            href="#projects"
            className="shine-button bg-gradient-primary text-white font-semibold px-7 py-3.5 rounded-full inline-flex items-center gap-2 hover:-translate-y-0.5 active:translate-y-0.5 transition-transform"
            style={{ boxShadow: "var(--glow-primary)" }}
          >
            View My Work
          </a>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="shine-button glass-card text-foreground font-semibold px-7 py-3.5 rounded-full inline-flex items-center gap-2 hover:-translate-y-0.5 active:translate-y-0.5 transition-transform border border-white/10"
          >
            <Download size={18} /> Download Resume
          </a>
        </div>

        <div className="flex items-center justify-center gap-5">
          <a
            href="https://github.com/Muqadas-Fareed-devt"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform hover:text-[var(--brand-blue)]"
            style={{ transition: "var(--transition-smooth)" }}
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/muqadas-fareed-24a07837b"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:scale-110 transition-transform hover:text-[var(--brand-violet)]"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-muted-foreground hover:text-foreground animate-bounce-down"
      >
        <ArrowDown size={28} />
      </a>
    </section>
  );
}