particlesJS("background", {

    particles: {
        number: {
            value: 50, // Number of Particles (count)
            density: {
                enable: true,
                value_area: 300, // Area where particles will be distributed
            },
        },

        color: {
            value: ["#DEF5E5", "#BCEAD5", "#C4DFDF", "#8EC3B0"], // Particles color
            // value: ["#A0C49D", "#C4D7B2", "#E1ECC8", "#F7FFE5"], // Particles color
            // value: ["#FEF5ED", "#D3E4CD", "#ADC2A9", "#99A799"], // Particles color
            // value: ["#C4DFDF", "#D2E9E9", "#E3F4F4", "#F8F6F4"], // Particles color



        },
        shape: {
            type: "circle", // Shape type
        },
        opacity: {
            value: 0.3, // Base opacity of particles
            random: true,
            anum: {
                enable: true,
                speed: 0.5,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 800, // Base size of particles
            random: false,
            anim: {
                enable: true,
                speed: 3,
                size_min: 0.3,
                sync: false,
            },
        },

        // Connecting lines
        line_linked: {
            enable: false,
            distance: 150, // Maximum distance between linked particles
            color: "#000",
            opacity: 0.4,
            width: 1,
        },

        // Particle movement
        move: {
            enable: true,
            speed: 0.2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out", // Behavior when particles move out of the canvas
            bounce: false,
        },
    },
    // Interactivity settings
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: false, // Enable hover interactivity
                mode: "grab",
            },
            onclick: {
                enable: false, // Enable for click
                mode: "remove", // Push particles on click
            },
            resize: true, // Resize particles animation on window resize
        },
    },

    // Detect retina displays
    retina_detect: true,

});