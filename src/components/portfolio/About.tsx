import TiltCard from "./TiltCard";
import SectionTitle from "./SectionTitle";
import AnimatedCounter from "./AnimatedCounter";
import profileImg from "@/assets/profile.jpeg";
const stats = [
  { label: "Years Coding", value: 1, suffix: "+" },
  { label: "Projects Built", value: 3, suffix: "+" },
  { label: "Certifications", value: 3, suffix: "" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div
        className="floating-orb animate-drift"
        style={{ top: "20%", right: "5%", width: 300, height: 300, background: "#7b2ff7" }}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionTitle eyebrow="Get to know me" title="About Me" />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <TiltCard className="relative mx-auto max-w-sm w-full">
            <div
              className="absolute -inset-2 rounded-2xl opacity-60 blur-xl"
              style={{ background: "var(--gradient-primary)" }}
            />
            <div className="relative glass-card rounded-2xl p-2 overflow-hidden">
              <img
                src={profileImg}
                alt="Muqadas portrait"
                className="rounded-xl w-full aspect-[3/4] object-cover"
              />
            </div>
          </TiltCard>

          <div>
            <div className="glass-card rounded-2xl p-8 glow-border-hover">
              <h3 className="text-2xl font-bold mb-4">
                Hi, I'm <span className="text-gradient">Muqadas</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a <span className="text-gradient font-semibold">Full Stack Web Developer</span> and{" "}
                <span className="text-gradient font-semibold">Python Developer</span> based in
                Shikarpur, Pakistan. Currently in my 3rd year of BS Computer Science at
                Shaikh Ayaz University, I love turning ideas into clean, performant products.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in <span className="text-gradient font-semibold">React</span>,{" "}
                <span className="text-gradient font-semibold">Flask</span>, REST APIs, and
                modern UI design — and I'm always exploring new tools that push the web forward.
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          {stats.map((s) => (
            <TiltCard key={s.label}>
              <div className="glass-card glow-border-hover rounded-2xl p-8 text-center">
                <div
                  className="text-5xl font-extrabold mb-2"
                  style={{
                    background: "var(--gradient-primary)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  <AnimatedCounter end={s.value} suffix={s.suffix} />
                </div>
                <p className="text-muted-foreground text-sm uppercase tracking-wider">
                  {s.label}
                </p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}