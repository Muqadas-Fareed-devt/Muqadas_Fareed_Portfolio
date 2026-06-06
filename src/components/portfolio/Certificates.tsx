import { ExternalLink } from "lucide-react";
import TiltCard from "./TiltCard";
import SectionTitle from "./SectionTitle";

function MetaLogo() {
  return (
    <svg viewBox="0 0 48 48" width="36" height="36" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="meta-g1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0064E0" />
          <stop offset="100%" stopColor="#0082FB" />
        </linearGradient>
        <linearGradient id="meta-g2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0082FB" />
          <stop offset="100%" stopColor="#00B2FF" />
        </linearGradient>
      </defs>
      <ellipse cx="14" cy="24" rx="6" ry="10" fill="url(#meta-g1)" />
      <path d="M20 24 Q24 10 34 14 Q40 17 40 24 Q40 31 34 34 Q24 38 20 24Z" fill="url(#meta-g2)" />
      <ellipse cx="34" cy="24" rx="6" ry="10" fill="url(#meta-g2)" />
    </svg>
  );
}

function GoogleLogo() {
  return (
    <svg viewBox="0 0 48 48" width="36" height="36" xmlns="http://www.w3.org/2000/svg">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
      <path fill="none" d="M0 0h48v48H0z"/>
    </svg>
  );
}

const IssuerLogo: Record<string, () => JSX.Element> = {
  Meta: MetaLogo,
  Google: GoogleLogo,
};

const certs = [
  {
    title: "Introduction to Front-End Development",
    issuer: "Meta",
    date: "Aug 2025",
    url: "https://coursera.org/verify/8GBKLZYJYL6B",
  },
  {
    title: "Foundations of Cybersecurity",
    issuer: "Google",
    date: "Jul 2025",
    url: "https://coursera.org/verify/PGEZ3V8YH351",
  },
  {
    title: "Foundations: Data, Data, Everywhere",
    issuer: "Google",
    date: "Jun 2025",
    url: "https://coursera.org/verify/ALPB2ZMKXA06",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="relative py-24 px-6">
      <div
        className="floating-orb animate-drift"
        style={{ bottom: "10%", right: "10%", width: 320, height: 320, background: "#7b2ff7" }}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionTitle eyebrow="Verified credentials" title="Certificates" />

        <div className="grid md:grid-cols-3 gap-y-14 gap-x-7 pt-10">
          {certs.map((c) => (
            <TiltCard key={c.title} intensity={8}>
              <div className="glass-card glow-border-hover rounded-2xl relative pt-12 group">
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ background: "var(--gradient-primary)" }}
                />
                <div
                  className="absolute -top-7 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform bg-white"
                  style={{
                    boxShadow: "0 8px 30px rgba(123,47,247,0.45)",
                  }}
                >
                  {IssuerLogo[c.issuer] ? IssuerLogo[c.issuer]() : null}
                </div>
                <div className="px-7 pb-7 pt-4 text-center">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                    {c.issuer} · {c.date}
                  </p>
                  <h3 className="text-lg font-bold mb-5 min-h-[3.5rem]">{c.title}</h3>
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    className="shine-button inline-flex items-center justify-center gap-2 bg-gradient-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:-translate-y-0.5 transition-transform"
                    style={{ boxShadow: "0 6px 20px rgba(0,212,255,0.35)" }}
                  >
                    Verify <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}