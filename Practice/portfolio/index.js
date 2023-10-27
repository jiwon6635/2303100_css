particlesJS("background", {
    particles: {
        number: {
            value: 50, // 입자 수
            ensity: {
                enable: true,
                value_area: 300, 
            },
        },

        color: {
            value: ["#DEF5E5", "#BCEAD5", "#C4DFDF", "#8EC3B0"], // 
            // value: ["#A0C49D", "#C4D7B2", "#E1ECC8", "#F7FFE5"], // 
            // value: ["#FEF5ED", "#D3E4CD", "#ADC2A9", "#99A799"], // 
            // value: ["#C4DFDF", "#D2E9E9", "#E3F4F4", "#F8F6F4"], // 



        },
        shape: {
            type: "circle", // 입자모양 
        },
        opacity: {
            value: 0.3, // 입자 투명도
            random: true,
            anum: {
                enable: true,
                speed: 0.5,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 800, // 입자크기
            random: false,
            anim: {
                enable: true,
                speed: 3,
                size_min: 0.3,
                sync: false,
            },
        },

        // 연결 선
        line_linked: {
            enable: false,
            distance: 150, // 최대 거리
            color: "#000",
            opacity: 0.4,
            width: 1,
        },

        // 입자의 움직임
        move: {
            enable: true,
            speed: 5,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out", 
            bounce: false,
        },
    },

    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: false, 
                mode: "grab",
            },
            onclick: {
                enable: false,
                mode: "remove", 
            },
            resize: true,
        },
    },
    retina_detect: true,
});