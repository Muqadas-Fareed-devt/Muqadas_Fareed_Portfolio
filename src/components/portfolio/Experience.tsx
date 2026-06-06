import SectionTitle from "./SectionTitle";
import Timeline from "./Timeline";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-6">
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionTitle eyebrow="Let's collaborate" title="Experience" />
        <Timeline
          items={[
            {
              meta: "Available now",
              title: "Open to Internship & Freelance Opportunities",
              subtitle: "Full Stack Web Development · Python Development",
              body: "Currently seeking remote internships or freelance projects to apply my skills, learn from real teams, and ship great products.",
              highlight: true,
            },
          ]}
        />
      </div>
    </section>
  );
}