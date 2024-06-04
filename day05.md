## 5일차 (24.06.04)
- HTML + CSS + js(jQuery) 응용
    - 웹페이지 클로닝
        - 핀터레스트 타입 + 부트스트랩 웹페이지 만들기(완료) &rarr; 파일 위치 : day04

        https://github.com/HyungJuu/basic-aspnet-2024/assets/158007420/a9b7bd47-b46d-4f9d-b808-9d0c2174933a

        - [Codehal 유튜버(https://www.youtube.com/@codehal)] 로그인 웹페이지 튜토리얼
            - CSS 코드파일 분리

                ![Codehal 로그인창 따라하기](https://raw.githubusercontent.com/HyungJuu/basic-aspnet-2024/main/images/html007.png)

            <!-- <img src="https://raw.githubusercontent.com/HyungJuu/basic-aspnet-2024/main/images/html007.png" width="800" alt="Codehal 로그인창 따라하기"> -->

            - [박스아이콘](https://boxicons.com/?query=lock)
            - [구글폰트](https://fonts.google.com/)
                - 원하는 폰트 클릭 &rarr; Get font &rarr; <> Get embed code &rarr; Web의 코드들 사용
                - 폰트 적용방법

                ```html
                <head>
                <!-- CSS -->
                <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
                <style>
                    /* 폰트 웹사이트의 코드를 사용할수도 있지만 @import url(""); 형태로도 사용 가능 */
                    @import url("https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap");
                    /* 폰트 모두 적용 */
                    * { font-family: "Ubuntu", sans-serif; }

                    /* 폰트별 설정 */
                    .ubuntu-light {
                        font-family: "Ubuntu", sans-serif;
                        font-weight: 300;
                        font-style: normal;
                    }
                    .ubuntu-regular {
                        font-family: "Ubuntu", sans-serif;
                        font-weight: 400;
                        font-style: normal;
                    }
                    /* ... */
                </style>
                ```
