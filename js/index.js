// JavaScript로 슬라이드쇼 구현
const slideList = document.querySelector('.slide-list');
const innerSlides = document.querySelectorAll('.inner');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

// 초기 슬라이드 표시
showSlide(currentIndex);

// 이전 슬라이드 표시
prevBtn.addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = innerSlides.length - 1;
    }
    showSlide(currentIndex);
});

// 다음 슬라이드 표시
nextBtn.addEventListener('click', () => {
    currentIndex++;
    if (currentIndex >= innerSlides.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
});

// 슬라이드 표시 함수
function showSlide(index) {
    innerSlides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}
