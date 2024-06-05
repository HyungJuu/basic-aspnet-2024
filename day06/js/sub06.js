let listBg = document.querySelectorAll('.banner .bg');
let titleBanner = document.querySelector('.banner h1');
let listTab = document.querySelectorAll('.tab');

window.addEventListener('scroll', (event) => {
    let top = this.scrollY;
    // 배경이미지 위치
    listBg.forEach((bg, index) => {
        if (index != 0 && index != 8) {
            bg.style.transform = `translateY(${top*index/2}px)`;
        }
        else if (index == 0) {
            bg.style.transform = `translateY(${top/3}px)`;
        }
    });
    // 배너 위치
    titleBanner.style.transform = `translateY(${top*4/2}px)`;

    /* 전체화면에서 크기가 80% 이하일때는 스크롤시 이미지가 안나옴.. 왜..? */
    // 탭기능
    listTab.forEach(tab => {
        if (tab.offsetTop - top < 500) {
            tab.classList.add('active');
        }
        else {
            tab.classList.remove('active');
        }
    });
});