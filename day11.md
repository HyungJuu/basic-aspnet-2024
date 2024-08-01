## 11일차(24.07.23)
- ASP.NET Core 포트폴리오 웹사이트, MyPortfolio
    1. EntityFramework로 SQL 사용없이 DB 핸들링
        - DbContext.Add(삽입), Update(수정), Remove(삭제) 기능 존재
        - 위의 명령을 실행 후 DbContext.SaveChangesAsync() 실행해서 실제 DB에 반영
        - ToListAsync(), FirstOrDefaultAsync()는 SELECT로 트랜잭션이 발생 x. 그래서 SaveChangesAsync()를 실행하지 않음
    2. 글 조회수 올리기
    3. 게시글 삭제
        - _layout.cshtml의 @await RenderSectionAsync("Scripts", required: false) 이 각 페이지에 필요시 스크립트 영역을 만들어 써라는 의미
        - AJAX 삭제는 나중에 다시!!
    4. 페이징(스크롤, 번호)
        - 웹사이트에서 가장 중요한 기능 중 하나❗
        - 한 페이지에 표시할 수 있는 글을 수를 제한
        - 번호페이징
            1. BoardController.cs Index() 액션메서드 내 FromSql()로 변경(비동기 적용 안됨, 비동기 부분 제거)
            2. 페이징용 쿼리 작성

                ```sql
                SELECT *
                FROM (
                        SELECT  ROW_NUMBER() OVER (ORDER BY Id DESC) AS rowNum
                            , Id
                            , Name
                            , UserId
                            , Title
                            , Contents
                            , Hit
                            , RegDate
                            , ModDate
                        FROM Board
                        ) AS base
                WHERE base.rowNum BETWEEN 1 AND 10 -- 1과 10에 10씩 더하면 다음페이지를 조회하는 쿼리
                ```

            3. Index() 내 로직 수정
            4. Views/Board/Index.cshtml 화면코드 수정

                https://github.com/user-attachments/assets/8a7e8eab-dc11-49c3-85d6-1300a0512629

    5. 검색
        - FromSqlRaw() 메서드 변경
        - html 링크에 ?page=1&search=검색어 추가

    6. HTML 에디터
        - Markdown 에디터
        - simplemde(https://simplemde.com)
        - _layout.cshtml에 js, css 링크만 추가
        - 실제 사용페이지에서 특정 js만 실행
        - Create.cshtml, Edit.cshtml은 동일하게 작업
        - NuGet패키지 Westwind.AspNetCore.Markdown 검색

            <img src="https://raw.githubusercontent.com/HyungJuu/basic-aspnet-2024/main/images/an007.png" width="600">
