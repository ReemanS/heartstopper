import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

// Very laggy on development, let's see how it performs on production
const Particle = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          value: true,
          zIndex: -66,
        },
        particles: {
          number: {
            value: 66,
            density: {
              enable: true,
              value_area: 6666,
            },
          },
          color: {
            value: "#98ac95",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#98ac95",
            },
          },
          opacity: {
            value: 0.66,
            random: false,
            anim: {
              enable: false,
              speed: 0.6,
              opacity_min: 0.1,
              sync: false,
            },
          },
          size: {
            value: 6,
            random: true,
            anim: {
              enable: false,
              speed: 66,
              size_min: 0.6,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 666,
            color: "#98ac95",
            opacity: 0.6,
            width: 0.6,
          },
          move: {
            enable: true,
            speed: 6,
            direction: "top-left",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 666,
              rotateY: 666,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: false,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 666,
              line_linked: {
                opacity: 0.6,
              },
            },
            bubble: {
              distance: 666,
              size: 66,
              duration: 6,
              opacity: 6,
              speed: 6,
            },
            repulse: {
              distance: 666,
              duration: 0.66,
            },
            push: {
              particles_nb: 6,
            },
            remove: {
              particles_nb: 0.66,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default Particle;
