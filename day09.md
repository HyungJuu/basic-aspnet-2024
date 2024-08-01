- ASP.NET Core MVC
    - MVC 리뷰
        - Model은 개발자가 따로 만듦
        - View, Controller 폴더는 미리 만들어짐
        - 웹 브라우저에서 접근할 페이지를 만들려면
            1. 해당 컨트롤러를 생성
            2. 뷰를 같이 생성할지 나중에 따로 생성할지 선택
            3. 컨트롤러 이름과 동일한 뷰 폴더, 메서드 이름과 동일한 cshtml 페이지가 생성❗
            4. 컨트롤러에 모델에 DB와 연결될 내용을 작성
            5. 모델 내용을 뷰로 리턴

- ASP.NET Core 포트폴리오 웹사이트, MyPortfolio
    1. Visual Studio 에서 ASP.NET Core 웹앱(MVC) 생성
    2. 부트스트랩 템플릿 사이트에서 알맞은 템플릿 다운로드
        - [Start Bootstrap](https://startbootstrap.com/themes)
        - [themeWaGon](https://themewagon.com/theme-price/free/?swoof=1&pa_frameworks=bootstrap-5&paged=1&really_curr_tax=40-pa_price)
    3. wwwroot 폴더 밑에 템플릿 html, css, js, 이미지 등 위치
    4. 템플릿 페이지에 공통적인 부분(Header, Footer)은 _layout.cshtml에 위치
    5. 중간에 페이지마다 변경되는 부분은 각 Views 밑에 포함
    6. _layout.cshtml에 공통부분 옮기기
    7. index.cshtml에 index.html에서 공통부분 외의 영역 옮기기
    8. index.cshtml 내용 수정
    9. ResumeController.cs 생성. DB관련된 설정이 없으면 모델, 뷰를 만들기 어려움
    10. Resume 라는 폴더가 Views 아래에 만들어져야함
    11. resume.html 에 내비게이션 아래 변경부분만 복사해서 index.cshtml에 붙여넣기
    12. Project, Contact도 동일하게 적용
    13. Code First방식으로 Board테이블 생성
    14. Nuget 패키지 설치
        - Microsoft.EntityFrameworkCore 설치
        - Microsoft.EntityFrameworkCore.Tools 설치
        - Microsoft.EntityFrameworkCore.SqlServer 설치
    15. model/Board.cs 로 엔티티 클래스 생성
    16. appsettings.json에 DB 연결문자열 추가
    17. Data/AppDbContext.cd 생성
    18. Program.cs 에 DbContext 종속성 주입
    19. NuGet 패키지 관리자 콘솔 > Add-Migration 생성명, Update-Database 진행
    20. _layout.cshtml Board 링크 수정
    21. /Controller/BoardController.cs를 생성(모델, 뷰 연결)
        - Entity Framework를 사용하며 뷰가 포함된 MVC 컨트롤러

        <img src="https://raw.githubusercontent.com/HyungJuu/basic-aspnet-2024/main/images/an006.png" width="500">
        