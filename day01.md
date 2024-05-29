## 1일차 (24.05.29)
- Front-end(프론트엔드, 클라이언트)
    - HTML5
    - CSS3
    - Javascript

- Back-end(백엔드)
    - 주로 사용
        1. Java : Spring, Spring Boot, JSP, EJB ...
        2. Javascript : Node.js, Express ...
        3. Python : Django, Flask, fastAPI ...
        4. C# : ASP.NET (NVC, Boilerplate..)
    - 잘 사용하지 않음
        5. Ruby : Ruby on rails
        6. C : cgi, fastCGI ...
        7. PHP

- 개발 시 사용하는 것
    - 프론트엔드 전부 + 백엔드 중 하나 + DB
    - 웹 브라우저 F12(개발자도구)
    - VS Code 플러그인
        - HTML Code Snippet
        - Live Server

- HTML5
    - XML : 웹페이지를 구성하기 위한 선행기술 &rarr; 너무 복잡해서 간략화 시킨것
    - Hyper Text Markup Language
    - 기본 확장자 &rarr; <.html>
    - **tip!** lorem 탭, 긴 샘플텍스트 생성

    - 요소(body)
        - h1 ~ h6 : 제목 &rarr; 마크다운의 (#,##)제목 기능과 동일
        - p : 일반문장
        - div : 그룹핑(그룹화) 구분자, 아주 중요(CSS 연계 디자인)
        - img : 이미지 표현
        - br : 다음줄로 내리기(엔터)
        - hr : 가로선
        - 특수문자 : &(영문자); 형식으로 표시(종류가 많음)

            ```
            &lt; : <
            &gt; : >
            &amp; : &
            &copy; : ©
            &plusmn; : ±
            &nbsp; : 공백
            ```

        - strong 또는 b : 볼드체
        - em : 이탤릭체(기울임)
        - mark : 형광펜 효과(강조)
        - u : 밑줄
        - strike : 취소선
        - small : 작은글자
        - sub, sup : 아래첨자 | 위첨자
        - **a : 웹페이지 링크(중요)**
        - ul, ol ; 순서없는 목록 | 순번있는 목록
        - table, tr, th, td : 테이블을 만드는 태그
            - colspan : 테이블 열 병합(좌우)
            - rowspan : 테이블 행 병합(상하)
        - audio, video : [오디오](https://file-examples.com/index.php/sample-audio-files/sample-mp3-download/), [비디오](https://samplelib.com/sample-mp4.html) 샘플 추가
        - object,  embed : 객체 추가

        ![기본요소1](https://raw.githubusercontent.com/HyungJuu/basic-aspnet-2024/main/images/html001.png)

        ![기본요소2](https://raw.githubusercontent.com/HyungJuu/basic-aspnet-2024/main/images/html002.png)

- HTML 내에 스타일, 스크립트 적용방법
    - HTML + CSS + Javascript
        - 내부 스타일, 외부 스타일, 인라인 스타일

            ```html
            <head>
                <style>
                    /* CSS를 HTML 내부에 적용하는 방법 */
                    /* h1에 모두 적용됨 */
                    h1 {
                        color: white;
                        background-color: darkcyan;
                    }
                </style>
                <link rel="stylesheet" type="text/css" media="screen" href="practice.css"> <!-- 외부링크 -->
            </head>

            <body>
            <h1>HTML Start!!</h1>
            <h2>Have fun~!!</h2>
            <h1>Second Heading1</h1>
            <h2 style="color: steelblue;">Second Heading2</h2> <!-- 지정시 전체설정과 다르게 따로 가능  -->
            </body>
            ```

            ```css
            /* 외부 스타일 -> practice.css */
            h2 {
                color: midnightblue;
                background-color: mediumaquamarine;
            }
            ```

        - 내부 스크립트, 외부 스크립트, 인라인 스크립트

            ```html
            <head>
                <script>
                    /* 주석 */
                    /* 내부 스크립트. <script> 태그는 <body> 내에도 사용 가능 */
                    var name = prompt("이름을 입력하세요");
                    alert("나의 이름은 " + name); // Messagebox.Show()와 같음
                </script>

                <script src="practice.js"></script> <!-- 외부 스크립트 -->
                <!-- 내부 스크립트 실행 후 외부 스크립트 실행됨 -->
            </head>
            ```

            ```js
            // 외부 스크립트 -> practice.js
            alert("from js file!!!");
            ```
    
    - 오류, 디버그
        - F12 개발자도구 활용
    
    - 양식태그(body > form 안에 사용 필수)
        - front-end에서 입력한 내용을 back-end로 보내기 위한 관문
        - form을 반드시 사용
        - input

            ```md
            - type="text" : 텍스트박스
            - type="password" : 비밀번호 박스
            - type="file" : 파일 업로드
            - type="checkbox" : 체크박스
            - type="radio" : 라디오버튼 (name이 동일해야 함)
            - type="hidden" : 숨김값(유용하게 사용!!!)
            - type="image" : 이미지(img와 유사) -> https://www.placeholder.com/
            - type="color" : 색상표
            - type="date" : 날짜 선택
            - type="number" : 숫자 입력(up/down)

            - type="button" : 일반 버튼
            - type="reset" : 폼 내의 입력양식태그 값 초기화
            - type="submit" : 제출(!)
            ```
            
        - textarea : 여러행의 텍스트 입력
        - select, option(optgroup) : 콤보박스(분류)
        - fieldset : 그룹박스

        - **submit 클릭 &rarr; loopback(값 전달) 발생**
        - 값 전달 방법
            - GET : URL 뒤에 ?key=value&key=value... 형식으로 데이터 전달
                ```
                http://127.0.0.1:5500/day01/html05_input.html?id=admin&pass=1234
                ```

            - POST : 화면뒤로 숨겨서 데이터 전달 방식
                ```
                http://127.0.0.1:5500/day01/html05_input.html
                ```

    - 공간구분 태그
        - div(가장 많이씀) : 줄바꿈o, 행간으로 블록 공간구성
        - span : 줄바꿈x, 글자 영역만큼(문장단위)만 공간 구분, 한줄로 공간구성