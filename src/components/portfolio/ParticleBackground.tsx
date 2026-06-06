import { Component, type ReactNode } from "react";
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
        fpsLimit: 30,
        interactivity: {
          events: {
            onHover: { enable: false },
            resize: { enable: true },
          },
        },
        particles: {
          color: { value: ["#00d4ff", "#7b2ff7", "#a855f7"] },
          links: {
            color: "#00d4ff",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            outModes: { default: "bounce" },
          },
          number: { value: 30, density: { enable: true } },
          opacity: { value: 0.4 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 2 } },
        },
        detectRetina: false,
      }}
    />
  );
}

class ParticleErrorBoundary extends Component<
  { children: ReactNode },
  { crashed: boolean }
> {
  state = { crashed: false };
  componentDidCatch() {
    this.setState({ crashed: true });
  }
  render() {
    if (this.state.crashed) return null;
    return this.props.children;
  }
}

export default function ParticleBackground() {
  return (
    <ParticleErrorBoundary>
      <ParticlesProvider init={init}>
        <Inner />
      </ParticlesProvider>
    </ParticleErrorBoundary>
  );
}
