import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useCallback, useEffect, useState } from "react";
import { loadFull } from "tsparticles";

const ParticlesBg = ({ children }) => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

  return (
    <>
       <Particles
        id = "tsparticles"
        init = {particlesInit}
        loaded = {particlesLoaded}
        options={{
            "particles": {
                "number": {
                    "value": 50
                },
                "size": {
                    "value": 3
                },
                "color": {
                    "value": "#FFFFFFF"
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
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1
        }}
      />
      <div>{children}</div>

       
    </>

  );
};

export default ParticlesBg;
