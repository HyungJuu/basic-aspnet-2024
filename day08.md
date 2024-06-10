## 8일차(24.06.10)
- ASP.NET
    - 1990년대, MS가 웹 서버기술로 ASP(Active Server Page)를 배포. like JSP(Java Server Page)
    - ASP는 .NET으로 된 언어가 아닌, VBScript를 사용. 확장자(.asp)
    - 스파게티 코드 : HTML + CSS + javascript + VBScript 를 짬뽕으로 만든 웹 페이지
        - 많이 사용되었지만 유지보수가 어렵다
        - 성능이 나쁘다

    - 2000년대 초반, MS가 .NET Framework 발표
    - C#, VB.NET, C++.NET 등의 새로운 언어를 배포, 여기에 맞춰서 웹 서버기술을 다시 만듦 &rarr; ASP.NET(.aspx)
    - 가장 큰 장점 : 윈폼 개발하듯 웹개발을 할 수 있었음
    - 초창기에는 스파게티 코드를 거의 그대로 사용, 성능 안좋음
    - 2009년, ASP.NET(Model View Controller 디자인패턴) 공표. 성능이 좋아짐
        - 하지만, 윈도우에서만 동작
    - 2016년, 모든 OS플랫폼에서 동작할 수 있는 .NET Core를 재출시
    - 거기에 웹 서버기술을 또 다시 만듦 -> ASP.NET Core

    - .NET Core (현재는 .NET 9.0, Core라는 이름은 사용 안함)의 장점
        - 빠르고 오픈소스
        - 크로스 플랫폼, OS에 종속받지 않음
        - 성능!

    - ASP.NET 종류
        - ~~ASP.NET Webforms : 2000년도 초반에 나오다가 사장된 웹사이트 개발기술~~
        - **ASP.NET Core 웹앱(MVC) : 가장 기본적인 프론트엔드(HTML, CSS, JS .cshtml) + 백엔드(C# .aspx.cs) 웹사이트 개발**
        - **ASP.NET Core 웹 API : 데이터포털, 네이버, 카카오 ,영화API 사이트를 만드는 백엔드(프론트엔드가 없어서 화면이 없음)**
        - Js(Vue, Angular, React) 프론트엔드 + ASP.NET Core 백엔드
        - ~~Edge용 웹 드라이버 테스트 : 엣지 브라우저에 종속된 테스트용~~
        - ASP.NET Core gRPC 서비스 : 고성능 원격 프로시저 호출(스트리밍 호출) 서비스
        - Blazor : Js 프론트엔드를 따라서 C# 컴포넌트 기반으로 개발하는 웹개발 방식. 웹사이트 개발
        - Razor : 프론트엔드 개발에 C# 코드가 특화되어 사용되는 웹사이트 개발방식
        - .NET Aspire : Blazor 프론트엔드 + Redis 웹 API 백엔드

    - 참조사이트
        - [MS ASP.NET 설명서](https://learn.microsoft.com/ko-kr/aspnet/core/?view=aspnetcore-3.1)
        - [닷넷](https://github.com/dotnet)
        - [믹스드코드](https://mixedcode.com/)
        - [길벗IT 소스코드](https://github.com/gilbutITbook/006824)

    - ASP.NET Core 웹앱(MVC: Model-View-Controller)
        - 현재 기본적인 웹개발의 가장 표준
        - Java 계열도 Spring (Boot) MVC로 개발
        - MVC 개념도 

            <img src="https://raw.githubusercontent.com/HyungJuu/basic-aspnet-2024/main/images/an001.png" width="730">

        - 과거 프론트엔드에 스파게티코드가 심했다면, 현재는 최소화 되어있음 (SpringBoot, Pytho flask 모두 동일)
        - ISS Expres Serve : VS에서 ASP.NET 웹사이트를 운영하는 개발용 웹서버
        - index : 웹사이트에서 가장 대문되는 페이지 이름
        - 파일 저장시 핫다시로드(HotReload) 체크

            ![HotReload](https://raw.githubusercontent.com/HyungJuu/basic-aspnet-2024/main/images/an003.png)

        - @로 시작하는 C# 구문 : Tag helper, Html helper로 HTML 구문 내에 C# 코드를 적어서 활용하는 방법 = Razor 구문
        - Action == HTML에서 form 태그 내에 submit 버튼 클릭 | 링크를 클릭 하는 것, 윈앱에서 이벤트와 동일
        - ActionResult = 액션이 발생한 후 처리하는 메서드의 결과
        - 콘솔 서버로그 확인 필수, 프로세스가 종료되면 웹사이트 실행 안됨

            ![ASP.NET Core](https://raw.githubusercontent.com/HyungJuu/basic-aspnet-2024/main/images/an002.png)

    - 데이터베이스 연동방법
        - DB first : 가장 전통적인 DB 연동방식. DB설계, DB구축, C#과 연동
        - Code first : 최근 트렌드가 되는 DB 연동방식. C# 엔티티 클래스 작성, DB연결 설정 후 실행하면 DB에 테이블이 생성
        - EntityFramework를 사용하면 아주 손쉽게 구축가능. DB를 잘 모르고 C#, ASP.NET만 알아도 DB를 핸들링 가능
        
            ![DB연결](https://raw.githubusercontent.com/HyungJuu/basic-aspnet-2024/main/images/an004.png)
    
    - EntityFramework(Core) 설치 &rarr; NuGet패키지
        - Microsoft.EntityFrameworkCore
        - Microsoft.EntityFrameworkCore.Tools
        - Microsoft.EntityFrameworkCore.SqlServer

    - Code first 구현 순서
        - ASP.NET 프로젝트 생성
        - EF 패키지 설치
        - 엔티티 클래스 작성
        - appsettings.json에 DB 연결문자열 추가
        - Data/ApplicationDbContext.cs 중간연결 클래스 생성
        - Program.cs Services 내에 DbContext 종속성을 주입
        - NuGet 패키지 관리자 > 패키지 관리자 콘솔 실행
            ```shell
            PM> add-migration 마이그레이션명
            Build started...
            Build succeeded.
            ...
            Done.
            ```
