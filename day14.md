## [14일차(24.07.26)](https://github.com/HyungJuu/basic-aspnet-2024/blob/main/day14.md)
- ASP.NET Core 포트폴리오 웹사이트, MyPortfolio
    1. AWS 라이트세일로 윈도우서버 인스턴스 만들기
        1. 구글 AWS 라이트세일 검색
        2. AWS 프리티어로 회원가입
        3. AWS 라이트세일로 로그인
        4. 루트 사용자로 로그인
        5. 인스턴스 생성
            - Linux/Unix는 라즈비안과 거의 동일
            - MS Windows OS 전용 > Windows Server 2016 선택
            - 무료 중 가장 성능이 좋은거 선택
            - 인스턴스 확인 이름 변경
            - 인스턴스 생성 클릭
        6. 인스턴스 관리
            - 관리로 진입
            - 네트워킹 탭 > 고정 IP 연결 클릭
            - 자신 고정아이피
            - Administrator
            - 비번 확인
        7. 원격 데스트톱 연결
            - 컴퓨터: 고정아이피 주소
            - Network2 Yes 클릭
            - 서버 매니저 오픈
            - IE Enhanced Security Config. ON->OFF
            - 인터넷 익스플로러 오픈 구글
            - 크롬 브라우저 설치
            - FileZilla Server 검색/ 설치
        8. 파일질라 서버 설정
            - 메뉴 > Configure 클릭
            - Server listners > 0.0.0.0 -> 내부 아이피로 변경
            - FTP and FTP over TLS 
            - Generate New > Disting,../HostName 입력, 새로 생성
            - Passive Mode 사용
                - From : 55000
                - To : 55999
            - User 생성
                - MountPoint
                    - Virtual path : /
                    - Native path : 본인 지정
                - Authentication : Required Password
                - 패스워드 입력 후 Apply
        9. 윈도우 방화벽 설정
            - Control Panel(제어판)
            - Windows Firewall > Advanced Setting
            - Inbound : 21, 55000-55999 열기

        10. AWS 방화벽 설정
            - 네트워킹 IPv4 방화벽
            - 21 포트 규칙추가
            - 55000-55999 포트 규칙추가

        11. 사용PC에서 파일질라 클라이언트 설치
            - 기본 설치
            - 사이트 관리자 
                - 새 사이트만들고
                - 호스트 : AWS pubilc ip
                - 사용자, 비번 : Filezilla server 설정한 사용자 계정
                - 전송설정 수동형 선택

        12. Visual Studio ASP.NET Core 게시
            - 프로젝트 > MRB > 게시 클릭
            - FTP/FTPS 서버 선택 > 다음
            - 서버 : aws public ip
            - 사이트 경로 : /
            - 수동모드
            - 사용자이름 패스워드 입력, 암호저장
            - 연결 유효성 검사 > 녹색체크
            - 게시 하면 됨            

        13. SQL Server 다운로드
            - 윈도우 서버 패스워드 정책 변경
                - 8문자이상 특수문자1자이상 영어대소문자
            - secpol.msc 보안정책
            - 패스워드 정책 변경 enabled -> disabled
            - 설치 후 SQL Config Manager
            - Network configuration
                - TCP/IP enable
            - 서버 재시작
            - 윈도우 방화벽, AWS 방화벽 1433포트 오픈
            - SSMS 접속 확인

        14. IIS(Interner Information Service)
            - ASP, ASP.NET 종류 웹서버 
            - Server Manager 오픈
            - Add Roles and Features 클릭
            - 기본 선택 Next
            - Select Server Roles
                - IIS Server 선택 다음
                - 기본 설치 

        15. SQL Server를 복제
            - SSMS 로컬 DB를 접속
            - 서버 종료
            - EMS.mdf, EMS_log.ldf 복사
            - FTP로 전송

        16. IIS 서버에서 ASP.NET 실행
            - 제어판 열기
            - Administraiton Tools
            - IIS 오픈
            - Default Web > Basic Setting 사이트 경로 변경
                - C:\Websites\MyPorfolio 
            - 폴더 설정 > Secuiry 탭
                - IIS_IUSERS 그룹 설정 추가

            - 구글에서 ASP.NET 코어 런타임 8 검색 다운로드
                - aspnetcore-runtime-8.0.7-win-x64.exe
                - dotnet-hosting-8.0.7-win.exe

            - IIS - Application Pool
                - ASPNETCore 애플리케이션 풀 생성
                - .NET CLR Version > No Managed... 선택
                - IIS 재시작

        17. 다음부터는 
            - Visual Studio 개발
            - Visual Studio 게시
            - DB가 변경되었으면, mdf, ldf를 FTP로 업로드
            - SQL 서버 중지 파일 이동