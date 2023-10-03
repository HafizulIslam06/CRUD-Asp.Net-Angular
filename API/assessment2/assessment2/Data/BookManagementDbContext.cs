using assessment2.Models;
using Microsoft.EntityFrameworkCore;

namespace assessment2.Data
{
    public class BookManagementDbContext : DbContext
    {
        public BookManagementDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Books> books { get; set; }
    }

    
}
