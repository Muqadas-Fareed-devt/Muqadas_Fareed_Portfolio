import Particles, { ParticlesProvider, useParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine } from "@tsparticles/engine";

async function init(engine: Engine) {
  await loadSlim(engine);
}

function Inner() {
  const { loaded } = useParticlesProvider();
  if (!loaded) return null;
  return (
    <Particles
      id="hero-particles"
      className="absolute inset-0"
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "grab" },
            resize: { enable: true },
          },
          modes: {
            grab: { distance: 180, links: { opacity: 0.6 } },
          },
        },
        particles: {
          color: { value: ["#00d4ff", "#7b2ff7", "#a855f7"] },
          links: {
            color: "#00d4ff",
            distance: 150,
            enable: true,
            opacity: 0.25,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8,
            direction: "none",
            outModes: { default: "bounce" },
          },
          number: { value: 80, density: { enable: true } },
          opacity: { value: 0.6 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
}

export default function ParticleBackground() {
  return (
    <ParticlesProvider init={init}>
      <Inner />
    </ParticlesProvider>
  );
}