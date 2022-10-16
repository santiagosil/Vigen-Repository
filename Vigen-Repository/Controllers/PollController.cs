using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Vigen_Repository.Models;

namespace Vigen_Repository.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PollController : ControllerBase
    {
        private readonly vigendbContext _context;
        public PollController(vigendbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Poll>>> getPolls()
        {
            List<Poll> polls = await _context.Polls.ToListAsync();
            if (polls.Count == 0) return NoContent();
            return Ok(polls);
        }

        [HttpPost]
        public async Task<ActionResult<Poll>> InsertPoll(Poll poll)
        {
            try
            {
                await _context.Polls.AddAsync(poll);
                await _context.SaveChangesAsync();
                return Ok(poll);
            }catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            
        }
    }
}
