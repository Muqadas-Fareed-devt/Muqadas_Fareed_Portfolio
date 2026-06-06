import SectionTitle from "./SectionTitle";
import Timeline from "./Timeline";

export default function Education() {
  return (
    <section id="education" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionTitle eyebrow="Academic journey" title="Education" />
        <Timeline
          items={[
            {
              meta: "2023 – Present",
              title: "BS Computer Science",
              subtitle: "Shaikh Ayaz University, Shikarpur",
              body: "Currently in 3rd year — focused on full-stack engineering, algorithms, and modern web platforms.",
            },
          ]}
        />
      </div>
    </section>
  );
}