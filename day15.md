## 15일차(25.07.30)
- ASP.NET Core 포트폴리오 웹사이트, MyPortfolio
    1. 프로젝트 화면 DB연동하기
        - 지난 목요일 만들던 것 확인
        - ProjectController.cs Create() Post 메서드 수정
        - 업로드 확인
        - Edit.cshtml은 Create.cshtml과 동일하게 수정
        - Edit() Post 메서드 역시 동일 -> DB에 프로젝트 내용 추가

        - HomeController.cs Project() Get 메서드에 DB연동 내용 추가
        - Views/Home/Project.cshtml Db연동 내용 추가 -> 프로젝트에 DB내용 표시

    2. 프로젝트 이미지 올리기
        - /Models/Project.cs에 Project 클래스와 파일업로드 중간단게 TempProject 클래스 작성
        - /Controller/ProjectController.cs 수정(IWebHostEnvironment 추가)
        - UploadImageFile() 메서드 추가 작성
        - /Views/Project/Create.cshtml에 @model MyPortfolio.Models.Project 를 @model MyPortfolio.Models.TempProject로 변경
        - 및 나머지 내용 수정
        - /Views/Project/Edit.cshtml에 @model MyPortfolio.Models.Project 를 @model MyPortfolio.Models.TempProject로 변경
        - 및 나머지 내용 수정

        - 실행확인

            <img src="https://raw.githubusercontent.com/HyungJuu/basic-aspnet-2024/main/images/an010.png" width="700">

    2. Contact 메일보내기(네이버 연동)
        - (구글)네이버 동일 - 메일계정 2단계보안 설정
        - 네이버메일 환경설정 > POP3/SMTP 설정 사용함 변경
        - 아래 코드를 해당 Post 액션 메서드 대입

            ```cs
            try
            {
                MailMessage mailMessage = new MailMessage();

                mailMessage.From = new MailAddress("보내는 계정 주소", "표시 이름", System.Text.Encoding.UTF8);
                // 받는이 메일 주소
                mailMessage.To.Add("yyy@naver.com");
                // 참조 메일 주소
                mailMessage.CC.Add("zzz@naver.com");
                // 비공개 참조 메일 주소
                mailMessage.Bcc.Add("kkk@naver.com");
                // 제목
                mailMessage.Subject = "메일 제목";
                // 메일 제목 인코딩 타입(UTF-8) 선택
                mailMessage.SubjectEncoding = System.Text.Encoding.UTF8;
                // 본문
                mailMessage.Body = "메일 본문";
                // 본문의 포맷에 따라 선택
                mailMessage.IsBodyHtml = false;
                // 본문 인코딩 타입(UTF-8) 선택
                mailMessage.BodyEncoding = System.Text.Encoding.UTF8;
                // 파일 첨부
                mailMessage.Attachments.Add(new Attachment(new FileStream(@"D:\test.zip", FileMode.Open, FileAccess.Read), "test.zip"));
                // SMTP 서버 주소
                SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");
                // SMTP 포트
                SmtpServer.Port = 587;
                // SSL 사용 여부
                SmtpServer.EnableSsl = true;
                SmtpServer.UseDefaultCredentials = false;
                SmtpServer.DeliveryMethod = System.Net.Mail.SmtpDeliveryMethod.Network;
                SmtpServer.Credentials = new System.Net.NetworkCredential("아이디", "패스워드");

                SmtpServer.Send(mailMessage);
            }
            catch (Exception ex)
            {
                // 에러메시지 HTML
            }
            ```

    3. Toastr 사용
        - https://github.com/CodeSeven/toastr 사용
        - _Layout.cshtml에 css CDN 추가
        - Partial View 생성 - 부분뷰로 /Views/Shared/_Notification.cshtml 생성
        - 아래와 같이 작성

            ```cs
            @if (TempData["success"] != null) {
                <script src="~/lib/jquery/dist/jquery.min.js"></script>
                <script src="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
                <script type="text/javascript">
                    // toastr.success('Have fun storming the castle!', 'Miracle Max Says')
                    toastr.success('@TempData["success"]');
                </script>
            }

                @if (TempData["error"] != null) {
                <script src="~/lib/jquery/dist/jquery.min.js"></script>
                <script src="//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js"></script>
                <script type="text/javascript">
                    // toastr.error('I do not think that word means what you think it means.', 'Inconceivable!')
                    toastr.error('@TempData["error"]');
                </script>
                <h3>@TempData["error"]</h3>
            }
            ```

        - /Views/Board/Index.cshtml에 아래의 코드 추가

            ```html
                var num = ViewBag.TotalCount - ((page - 1) * 10); // 전체 게시글 수를 (현재페이지-1)값과 페이지당 게시글수 곱을 빼기
            }

            <partial name="_Notification" />
            ```

        - /BoardController.cs Create() Post 메서드에 아래의 코드 추가
        
            ```cs
            await _context.SaveChangesAsync();
            // 이 부분 추가
            TempData["success"] = "성공적으로 저장했습니다.";
            ```

        - 실행결과

            <img src="https://raw.githubusercontent.com/HyungJuu/basic-aspnet-2024/main/images/an011.png" width="700">

    3. 부트스트랩 템플릿 커스터마이징, 자기 포트폴리오 사이트 만들기
        - 구글에서 부트스트랩 템플릿 검색
            - https://bootstraptaste.com/
            - https://startbootstrap.com/
            - https://themewagon.com/themes/
            - https://getbootstrap.com/docs/5.0/examples/








