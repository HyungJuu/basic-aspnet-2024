using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace MyPortfolio.Models
{
    public class Board
    {
        [Key]
        public int Id { get; set; } // PK
        [Required]
        [MaxLength(50)] // NVARCHAR(50) 사이즈 지정하려면
        [DisplayName("이름")]
        public string Name { get; set; } // 작성자명
        [MaxLength(20)]
        [DisplayName("아이디")]
        public string UserId { get; set; } // 작성자 아이디
        [Required]
        [MaxLength(520)]
        [DisplayName("제목")]
        public string Title { get; set; } // 게시글 제목
        [DisplayName("내용")]
        public string Contents { get; set; } // 게시글 내용
        [DisplayName("조회수")]
        public int Hit { get; set; } // 게시글 읽은 횟수
        [DisplayName("작성일자")]
        public DateTime RegDate { get; set; } = DateTime.Now; // 게시글 최초 작성일자
        [DisplayName("수정일자")]
        public DateTime ModDate { get; set; } // 게시글 최종 수정일자

    }
}
