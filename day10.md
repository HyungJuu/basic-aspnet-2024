## 10일차(24.07.18)
- ASP.NET Core 포트폴리오 웹사이트, MyPortfolio
    1. 멤버속성을 잘못만든 경우 (ModDate를 ModeDate로 만듦)
        - Board.cs : ModeDate -> ModDate
        - BoardController.cs : ModeDate -> ModDate 
        - Views/Board/*.cshtml : ModeDate -> ModDate
        - 오류가 뜨는 위치의 ModeDate 수정
        - Migrations 폴더 아래의 파일들 모두 삭제
        - NuGet 패키지 관리자 콘솔 > Add-Migration 생성명, Update-Database 재진행
    2. ASP.NET Core 템플릿으로 만들어주는 CRUD(Insert, Select, Update, Delete)
    3. 테이블 삭제, 재생성
    4. 게시판 관련된 화면 수정작업
        - Views/Board/Index.cshtml 게시판 리스트화면 수정
        - Index.cshtml : 테이블 틀 변경, 생성, 상세, 삭제 버튼 제거
        - Models/Board.cs : 테이블 한글이름 추가 &rarr; DisplayName("")

        - Views/Board/Details.cshtml 부트스트랩 적용
        - 수정, 삭제 등 버튼 디자인 적용
        - Views/board/Create.cshtml 부트스트랩 적용

    5. SSMS에서 Board테이블 Hit, RegDate, ModDate &rarr; Null 허용으로 변경
    
    6. 웹사이트 동작 순서
        1. https://localhost:7271/Board/Create 링크오픈
        2. BoardController &rarr; Create 액션메서드 발동
        3. Submit &rarr; BoardController &rarr; Create 액션메서드 발동
        4. Create 액션메서드 내 로직 처리 &rarr; DB에 데이터 입력
        5. Models/Board.cs ModDate를 DateTime &rarr; DateTime? 변경
        6. Edit : 방법 동일. Create.cshtml 내용을 복사/붙여넣기. 단, asp-action="Edit"으로 변경!!