## 12일차 (24.07.24)
- ASP.NET Core 포트폴리오 웹사이트, MyPortfolio
    1. 삭제로직 수정
        1. BoardController.cs 사용X &rarr; BoardRestController.cs 다시 생성
        2. /Views/Details.cshtml jQuery를 작업 팝업
        3. /Board/Index로 화면 전환

    2. 회원가입, 로그인, 권한?....
        1. /Models/User.cs 클래스 생성
        2. User클래스와 Board클래스간 관계형성 (virtual)
        3. AppDbContext.cs에 User DBset추가
        4. Add-Migration, Update-Database 실행 -> DB 생성
        5. Program.cs에 로그인 세션 설정
        6. _layout.cshtml 로그인/로그아웃 메뉴 추가
        7. HomeController.cs Login/Logout 액션메서드 작성
        8. Login() 액션메서드 마우스오른쪽 버튼 뷰생성 Login.cshtml
        9. bootstrap 사이트에서 예제 파일 다운로드
        10. sign-in 폴더 내 index.html. sign-in.css Static경로(wwwroot) 복사
        11. Login.cshtml을 위의 파일 참조해서 수정
        12. HomeController.cs 에 Register() 액션메서드 작성
        13. Register.cshtml 회원가입 페이지 생성