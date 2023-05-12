const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video-container");

// btn.addEventListener("click", function () {
//     if (!btn.classList.contains("slide")) {
//     btn.classList.add("slide");
//     video.pause();
//     } else {
//     btn.classList.remove("slide");
//     video.play();
//     }
//     });

// preloader

window.onclick = function() {
    if (video.paused) {
    video.play();
    } else {
    video.pause();
    }
};

video.addEventListener('pause', function() {
    video.controls = false;
});

const preloader = document.querySelector(".preloader");

window.addEventListener("load", function () {
    preloader.classList.add("hide-preloader");
});

