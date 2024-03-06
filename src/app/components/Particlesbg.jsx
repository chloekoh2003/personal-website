import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadFull } from "tsparticles";

const ParticlesBg = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadAll(engine);
        await loadFull(engine);
        //await loadBasic(engine);
        }).then(() => {
        setInit(true);
        });
    }, []);

    const particlesLoaded = (container) => {
        console.log(container);
    };

    const particlesStyle = {
        position: 'absolute',
        display: 'block',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -10
        };

    const options = useMemo(
        () => ({
            "particles": {
                "number": {
                    "value": 50
                },
                "size": {
                    "value": 1
                },
                "color": {
                    "value": "#FFFFFF"
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                },
                "links": {
                    "enable": true,
                    "color": "#ffffff",
                    "distance": 150,
                    "opacity": 0.5,
                    "width": 1
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    }
                }
            }
        }),
        [],
    );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        style={particlesStyle}
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default ParticlesBg;
