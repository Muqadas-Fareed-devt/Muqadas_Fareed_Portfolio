import { Code2, Server, Database, Wrench } from "lucide-react";
import TiltCard from "./TiltCard";
import SectionTitle from "./SectionTitle";

// Real full-color brand logos from devicon (via jsDelivr CDN)
const devicon = (name: string, variant = "original") =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-${variant}.svg`;

type Skill = { name: string; icon: string };

const categories: {
  icon: typeof Code2;
  title: string;
  skills: Skill[];
}[] = [
  {
    icon: Code2,
    title: "Frontend",
    skills: [
      { name: "React", icon: devicon("react") },
      { name: "HTML", icon: devicon("html5") },
      { name: "CSS", icon: devicon("css3") },
      { name: "Tailwind CSS", icon: devicon("tailwindcss") },
      { name: "JavaScript", icon: devicon("javascript") },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    skills: [
      { name: "Node.js", icon: devicon("nodejs") },
      { name: "Flask", icon: devicon("flask") },
      { name: "Python", icon: devicon("python") },
      { name: "REST APIs", icon: devicon("fastapi") },
    ],
  },
  {
    icon: Database,
    title: "Database",
    skills: [
      { name: "MongoDB", icon: devicon("mongodb") },
      { name: "SQL", icon: devicon("mysql") },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: [
      { name: "Git", icon: devicon("git") },
      { name: "GitHub", icon: devicon("github") },
      { name: "Web Scraping", icon: devicon("python") },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 px-6">
      <div
        className="floating-orb animate-drift"
        style={{ top: "30%", left: "5%", width: 350, height: 350, background: "#00d4ff" }}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionTitle eyebrow="What I work with" title="Skills" />

        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map(({ icon: Icon, title, skills }) => (
            <TiltCard key={title} intensity={6}>
              <div className="glass-card glow-border-hover rounded-2xl p-7 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <span
                      key={s.name}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-white/5 border border-white/10 hover:-translate-y-1 hover:scale-105 hover:text-foreground hover:border-[var(--brand-blue)]/40 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] text-muted-foreground transition-all cursor-default"
                    >
                      <img
                        src={s.icon}
                        alt={s.name}
                        className="w-5 h-5 object-contain shrink-0"
                        loading="lazy"
                      />
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}