using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using Vigen_Repository.Models;

namespace Vigen_Repository.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PollController : ControllerBase
    {
        private readonly vigendbContext _context;
        private readonly IHubContext<BroadCastHub, IHubClient> _hubContext;
        public PollController(vigendbContext context, IHubContext<BroadCastHub, IHubClient> hubContext)
        {
            _context = context;
            _hubContext = hubContext;
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
                
                ViolenceType violenceType = await _context.ViolenceTypes.FindAsync(poll.P7);
                User user = await _context.Users.FindAsync(poll.UserId);
                Notify notify = new Notify
                {
                    UserId = poll.UserId,
                    Title = "VIGEN - Posible caso de: " + violenceType.Name,
                    Description = "Se ha reportado un POSIBLE caso de " + violenceType.Name +
                    " Identificacion: " + poll.UserId +
                    " Nombre: " + user.Name +
                    " Ubicación: " + user.Ubication,
                    OrganizationTypeId = 1,
                    StateId = 1
                };
                
                
                if (poll.P7 != 0)
                {
                    await _hubContext.Clients.All.recibeNotify(notify);
                    await _context.Notifies.AddAsync(notify);
                }
                await _context.SaveChangesAsync();

                return Ok(poll);
            }catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
            
        }
    }
}
