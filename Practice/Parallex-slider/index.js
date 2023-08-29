const options = {
    accessibility: true,
    prevNextButtons: true,
    pageDots: true,
    setGallerySize: false,
    wrapAround: true, // 원형
    arrowShape: {
        x0: 1,
        x1: 58,
        y1: 62,
        x2: 55,
        y2: 48,
        x3: 18
    },
    autoPlay: 5000, // 자동
    pauseAutoPlayOnHover: false

};

function setBgPosition(slide, index) {
    const x = -(slide.target + flkty.x) / 3;
    slides[index].style.backgroundPosition = `${x}px`;
}


const carousel = document.querySelector('[carousel]');
const slides = Array.from(document.getElementsByClassName('carousel-cell'));
const flkty = new Flickity(carousel, options);

// 슬라이드 스크롤 이벤트
flkty.on('scroll', () => {
    // 배경 위치 계산 후 업데이트
    flkty.slides.forEach(setBgPosition);
});

const buttons = document.querySelectorAll('.carousel-cell button');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const link = button.getAttribute('data-link');
        window.location.href = link;
    });

    //  // 버튼에 호버할 때 슬라이더의 자동 움직임 일시 정지를 무시
    // button.addEventListener('mouseenter', () => {
    //     flkty.pausePlayer(true);
    // });

    // // 버튼에서 호버가 떠날 때 다시 자동 움직임 일시 정지
    // button.addEventListener('mouseleave', () => {
    //     flkty.pausePlayer(false);
    // });
});