/* 회전버튼 동작 */
var rotateBtn = document.querySelector('.rotate-btn');
var slides = document.querySelectorAll('.bg-slide');
var totalSlides = slides.length; // 5개(슬라이드 이미지 갯수)
let index = 0;

// $('.rotate-btn').on('click', function()); 와 동일
rotateBtn.addEventListener('click', function() {
    rotateBtn.classList.add('active');
    setTimeout(() => {
        rotateBtn.classList.remove('active');
    }, 2100);

    slides.forEach(slide => {
        if (slide.classList.contains('active')) {
            slide.classList.add('after-active');
        }
        else {
            slide.classList.remove('after-active');
        }
    });

    slides[index].classList.remove('active'); // 현재 슬라이드의 active 제거
    index += 1;

    if (index == totalSlides) index = 0; // 인덱스가 전체 슬라이드 수와 일치하면 초기화를 통해 처음으로 돌아감

    slides[index].classList.add('active'); // 새 슬라이드에 active 추가
});