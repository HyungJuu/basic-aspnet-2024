## 6일차(24.06.05)
- HTML + CSS + js(jQuery) 응용
    - 웹페이지 클로닝
        - Codehal 슬라이더 애니메이션 웹페이지 튜토리얼 따라하기(완료) &rarr; day05 / cloning03_codehal_page.html 파일
            ```html
            <head>
                <style>
                    .bg-slide.active .circle { /* active가 되는 것을 가장 위로 */
                        z-index: 10; /* z-index를 통해서 각 동작 레이어 조정 */
                    }
                </style>
            </head>

            ```
            - js파일 분할
            ```html
            <!-- js폴더 아래의 sub.js 파일 -->
            <script src="./js/sub.js"></script>
            ```
        - 개인 웹페이지 클로닝
            - 예제 6
                - 단축 기능 알아놓기
                ```html
                <body>
                    <!-- .bg.bg-$*9 탭 --> 
                    <div class="bg bg-1"></div>
                    <div class="bg bg-2"></div>
                    <div class="bg bg-3"></div>
                    <div class="bg bg-4"></div>
                    <div class="bg bg-5"></div>
                    <div class="bg bg-6"></div>
                    <div class="bg bg-7"></div>
                    <div class="bg bg-8"></div>
                    <div class="bg bg-9"></div>
                    <!-- <div class="bg bg-1"></div> 1~9까지 생성 
                        .(문자) : .은 class를 의미 -> 문자명의 class 생성
                        #(문자) : #은 id를 의미 -> 문자명의 id 생성
                        $ : 숫자 카운트 -> $*3을 하면 1~3만큼 생성
                        *숫자 : 숫자만큼 복붙(ctrl+c/z) -->
                </body>
                ```