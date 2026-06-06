import { ExternalLink } from "lucide-react";
import { Github } from "./BrandIcons";
import TiltCard from "./TiltCard";
import SectionTitle from "./SectionTitle";
import attendxImg from "@/assets/project-attendx.jpg";
import studyaiImg from "@/assets/project-studyai.jpg";
import smartAttImg from "@/assets/project-smart-attendance.jpg";

type Project = {
  title: string;
  description: string;
  tech: string[];
  demo?: string;
  repo: string;
  image: string;
  gradient: string;
};

const projects: Project[] = [
  {
    title: "AttendX — Attendance Management",
    description:
      "A full SaaS-style attendance dashboard built with zero dependencies — pure HTML, CSS & JS. Student CRUD, bulk attendance, CSV reports, 5 custom Canvas charts, activity feed, themes & session auth.",
    tech: ["HTML", "CSS", "JavaScript", "Canvas"],
    demo: "https://ali-nawaz-devt.github.io/AttendX-Attendace-Management/",
    repo: "https://github.com/Ali-Nawaz-devt/AttendX-Attendace-Management",
    image: attendxImg,
    gradient: "linear-gradient(135deg, #00d4ff, #7b2ff7)",
  },
  {
    title: "StudyAI — Student Study Assistant",
    description:
      "Ten AI study tools in a single HTML file — PDF Chat, Concept Explainer, Problem Solver, Flashcards, Quiz Maker, Essay Helper, Study Planner & Translator. Custom CSS UI, direct Gemini & Grok API calls.",
    tech: ["HTML", "CSS", "JavaScript", "Gemini API"],
    repo: "https://github.com/Muqadas-Fareed-devt/Student-Study-Assistant",
    image: studyaiImg,
    gradient: "linear-gradient(135deg, #7b2ff7, #ec4899)",
  },
  {
    title: "Smart Attendance System",
    description:
      "A full desktop application that auto-marks attendance using face recognition. Real-time detection, student database, attendance logs and reports — built for classrooms and offices alike.",
    tech: ["Python", "OpenCV", "Tkinter", "SQLite"],
    demo: "#",
    repo: "#",
    image: smartAttImg,
    gradient: "linear-gradient(135deg, #00d4ff, #06b6d4)",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionTitle eyebrow="Selected work" title="Projects" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((p) => (
            <TiltCard key={p.title} intensity={8}>
              <div className="glass-card glow-border-hover rounded-2xl overflow-hidden h-full flex flex-col group">
                <div
                  className="aspect-video relative overflow-hidden"
                  style={{ background: p.gradient }}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-deep)]/80 via-[var(--bg-deep)]/20 to-transparent" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">
                    {p.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="shine-button flex-1 text-center bg-gradient-primary text-white text-sm font-semibold px-4 py-2.5 rounded-full inline-flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-transform"
                        style={{ boxShadow: "0 6px 20px rgba(123,47,247,0.35)" }}
                      >
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    )}
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="shine-button flex-1 text-center text-sm font-semibold px-4 py-2.5 rounded-full inline-flex items-center justify-center gap-2 border border-white/10 bg-white/5 hover:-translate-y-0.5 transition-transform"
                    >
                      <Github size={14} /> GitHub
                    </a>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}