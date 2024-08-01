## 13일차(24.07.25)
- ASP.NET Core 포트폴리오 웹사이트, MyPortfolio
    1. 회원가입 계속...
        1. Register.cshtml에 asp-for등 C# Razor tag로 변경
        2. HomeController.cs Register Post 메서드 작성
        3. Login.cshtml에 C# Razor tag로 변경
        4. HomeController.cs Login Post 메서드 작성
        5. Logout Get메서드 추가

            https://github.com/user-attachments/assets/78de8215-28b5-4be8-b005-b7ffa8025426
               
    2. 게시판 글 오류 수정
        1. Board.cs 에 있는 Name, UserID를 삭제, User?로 변경, UserName을 virtual 추가
        2. BoardController.cs 있는 Board 클래스와 관련된 변수도 삭제
        3. Views/Board/*.cshtml Name, UserID를 삭제, 변경
        4. BoardController.cs 게시글 리스트 쿼리 변경
        5. Views/Board/*.cshtml 수정
        6. BoardController.cs에 Create Post 메서드에 사용자데이터 추가수정

    3. 프로젝트 파일업로드 
        1. Project.cs 모델 생성
        2. AppDbContext.cs에 DbSet<Project> 추가
        3. Add-Migration, Update-Database
        4. ProjectController, View 생성
        5. Views/Project/Create.cshtml 수정
        6. ProjectController, Create Post 메서드 수정