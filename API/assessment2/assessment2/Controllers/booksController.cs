using assessment2.Data;
using assessment2.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace assessment2.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class booksController : Controller
    {
        private readonly BookManagementDbContext _bookDbContext;
        public booksController(BookManagementDbContext bookDbContext)
        {
            _bookDbContext = bookDbContext;
        }


        [HttpGet]
        public async Task<IActionResult> GetAllBooks()
        {
            var books = await _bookDbContext.books.ToListAsync();

            return Ok(books);
        }



        [HttpPost]
        public async Task<IActionResult> AddBook([FromBody] Books BookRequest)
        {
            BookRequest.Id = Guid.NewGuid().ToString();
            await _bookDbContext.books.AddAsync(BookRequest);
            await _bookDbContext.SaveChangesAsync();
            return Ok(BookRequest);
        }



        [HttpGet]
        [Route("{id:Guid}")]
        public async Task<IActionResult> GetBook([FromRoute] string id)
        {
            var book = await _bookDbContext.books.FirstOrDefaultAsync(x => x.Id == id);

            if (book == null)
            {
                return NotFound();
            }

            return Ok(book);
        }



        [HttpPut]
        [Route("{id:Guid}")]
        public async Task<IActionResult> updatebook([FromRoute] string id, Books updatebookrequest)
        {
            var book = await _bookDbContext.books.FindAsync(id);

            if (book == null)
            {
                return NotFound();
            }

            book.Name = updatebookrequest.Name;
            book.Auth = updatebookrequest.Auth;
            book.availability = updatebookrequest.availability;

            await _bookDbContext.SaveChangesAsync();
            return Ok(book);
        }



        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> deleteBook([FromRoute] string id)
        {
            var book = await _bookDbContext.books.FindAsync(id);

            if (book == null)
            {
                return NotFound();
            }

            _bookDbContext.Remove(book);
            await _bookDbContext.SaveChangesAsync();

            return Ok();
        }

    }
}
