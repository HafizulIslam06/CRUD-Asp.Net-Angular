using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;

namespace assessment2.Models
{
    public class Books
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Auth { get; set; }
        public int availability { get; set; }

    }
}
