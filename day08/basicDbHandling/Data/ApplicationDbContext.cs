using basicDbHandling.Models;
using Microsoft.EntityFrameworkCore;

namespace basicDbHandling.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
            // 내용 x
        }

        // CodeFirst로 만들어둔 엔티티 클래스를 작성. 테이블에 생성할 엔티티가 늘어날 때마다 여기에 추가해야 함
        public DbSet<Category> Categories { get; set; }
    }
}
