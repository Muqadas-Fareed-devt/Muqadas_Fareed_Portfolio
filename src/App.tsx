import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Certificates from "@/components/portfolio/Certificates";
import Education from "@/components/portfolio/Education";
import Experience from "@/components/portfolio/Experience";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden" style={{ background: "#0a0a0f" }}>
      {/* Global animated gradient mesh background */}
      <div
        className="fixed inset-0 -z-10 animate-gradient-mesh opacity-50"
        style={{
          background:
            "radial-gradient(at 20% 20%, rgba(0,212,255,0.15), transparent 50%), radial-gradient(at 80% 30%, rgba(123,47,247,0.18), transparent 50%), radial-gradient(at 40% 80%, rgba(0,212,255,0.12), transparent 50%), radial-gradient(at 90% 90%, rgba(123,47,247,0.15), transparent 50%)",
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Education />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
