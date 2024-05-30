## 2일차 (24.05.30)
- HTML5
    - 시맨틱 웹 : 시맨틱 태그로 화면 구조를 잡는 웹구성 방식
        - header, main, content, nav, footer, aside, section, article.. 구조태그(화면표시x) 사용
        - 시맨틱 태그를 div로 바꿔도 똑같이 동작 &rarr; 그렇기때문에 많이 사용안함(걷어내는 추세)

- CSS3
    - 웹 디자인 핵심, Cascading Style Sheets
    - 상단에서부터 <body> 하위의 태그들에 계속해서 적용되는 스타일이라는 뜻
    - 선택자에게 주어지는 디자인 속성
    - 선택자(selector) 
        - 기본문법 : 선택자 { 키:값; 키:값; 키:값; }

    - 속성(property)
    - 배경, 폰트
    - 레이아웃
        - HTML만으로는 화면 레이아웃이 만들어지지 않음
        - 중앙정렬, 원트루, 고정바 ...

        ```html
        <style>
            * {margin: 0; padding: 0;}
            #centerlayout {
                /* auto 정중앙 위치 */  
                margin: 0 auto; width: 760px;
            }
            #bottomlayout{
                margin: 0 auto; width: 800px;
            }
            /* OneTrue layout */
            #onetruelayout {
                width: 600px; margin: 10px auto;
            }
            #top {
                background-color: rgb(118, 146, 129);
            }
            #middle {
                overflow: hidden; /* 레이아웃 정렬 */
                background-color: rgb(154, 185, 167);
            }
            #left {
                float: left; width: 400px;
                background-color:rgb(154, 185, 167);
            }
            #right {
                float: right; width: 200px;
                background-color: rgb(89, 128, 105);
            }
            #bottom {
                width: 600px; color: white;
                background-color: rgb(27, 86, 52);
            }
            .top_bar {
                background-color: rgb(49, 73, 59);
                height: 50px; position: inherit;
                left: 0; right: 0; top: 0;
            }
        </style>
        ```

        ![레이아웃](https://raw.githubusercontent.com/HyungJuu/basic-aspnet-2024/main/images/html005.png)
    
    - 반응형 웹(Responsive Web)
        - 메타태그 viewport를 사용하면 그때부터 반응형 웹

        ```html
        <meta name='viewport' content='width=device-width, initial-scale=1'>
        ```
        - @media 태그 : 디바이스 종류별로 CSS 따로 디자인 가능


- Javascript