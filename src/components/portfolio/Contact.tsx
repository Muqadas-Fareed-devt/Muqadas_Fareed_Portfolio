import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-24 px-6">
      <div
        className="floating-orb animate-drift"
        style={{ bottom: "0%", left: "10%", width: 400, height: 400, background: "#00d4ff" }}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionTitle eyebrow="Get in touch" title="Contact" />

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-4">
            <div className="glass-card glow-border-hover rounded-2xl p-6">
              <p className="text-sm text-muted-foreground mb-1">Email</p>
              <a
                href="mailto:muqadasfareed13115@gmail.com"
                className="flex items-center gap-2 text-foreground hover:text-[var(--brand-blue)] break-all"
              >
                <Mail size={16} /> muqadasfareed13115@gmail.com
              </a>
            </div>
            <div className="glass-card glow-border-hover rounded-2xl p-6">
              <p className="text-sm text-muted-foreground mb-1">Location</p>
              <p className="flex items-center gap-2">
                <MapPin size={16} /> Shikarpur, Sindh, Pakistan
              </p>
            </div>
            <div className="glass-card glow-border-hover rounded-2xl p-6">
              <p className="text-sm text-muted-foreground mb-3">Socials</p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Muqadas-Fareed-devt"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="w-11 h-11 rounded-full glass-card flex items-center justify-center hover:scale-110 hover:text-[var(--brand-blue)] transition-all"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/muqadas-fareed-24a07837b"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-11 h-11 rounded-full glass-card flex items-center justify-center hover:scale-110 hover:text-[var(--brand-violet)] transition-all"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 3000);
            }}
            className="md:col-span-3 glass-card glow-border-hover rounded-2xl p-7 space-y-4"
          >
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Name</label>
              <input
                required
                type="text"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-[var(--brand-blue)]/50 focus:shadow-[0_0_25px_rgba(0,212,255,0.25)]"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
              <input
                required
                type="email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-[var(--brand-violet)]/50 focus:shadow-[0_0_25px_rgba(123,47,247,0.25)]"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
              <textarea
                required
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none transition-all resize-none focus:border-transparent focus:ring-2 focus:ring-[var(--brand-blue)]/50 focus:shadow-[0_0_25px_rgba(0,212,255,0.25)]"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="shine-button bg-gradient-primary text-white font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 hover:-translate-y-0.5 active:translate-y-0.5 transition-transform w-full sm:w-auto justify-center"
              style={{ boxShadow: "var(--glow-primary)" }}
            >
              <Send size={16} /> {sent ? "Message Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}