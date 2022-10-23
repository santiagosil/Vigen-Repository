using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using Vigen_Repository.Models;

namespace Vigen_Repository.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotifyController : ControllerBase
    {
        private readonly vigendbContext _context;
        private readonly IHubContext<BroadCastHub, IHubClient> _hubContext;
        public NotifyController(vigendbContext context, IHubContext<BroadCastHub, IHubClient> hubContext)
        {
            _context = context;
            _hubContext = hubContext;
        }
        [HttpGet]
        public async Task<ActionResult<List<Notify>>> getNotifies()
        {
            List<Notify> notifies = await _context.Notifies.ToListAsync();
            if (notifies.Count == 0) return NoContent();
            reloj();
            return Ok(notifies);
        }

        private async Task reloj()
        {
            while (true)
            {
                await _hubContext.Clients.All.recibeNotify(new Notify
                {
                    Id = 0,
                    Description = "ayudaa",
                    OrganizationTypeId = 1,
                    StateId = 0,
                    Title = "Help me",
                    UserId = "123456789"
                });
                await Task.Delay(3000);
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Notify>> getNotify(string id)
        {
            int idAux;
            try { idAux = int.Parse(id); }
            catch { idAux = -1; }
            Notify? notify = await _context.Notifies.FindAsync(idAux);
            if (notify == null) return NotFound();
            return Ok(notify);
        }

        [HttpPost]
        public async Task<ActionResult<Notify>> postNotify(Notify notify)
        {
            try
            {
                await _context.Notifies.AddAsync(notify);
                await _context.SaveChangesAsync();
                await _hubContext.Clients.All.recibeNotify(notify);
                return Ok(notify);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Notify>> UpdateNotify(string id, Notify notify)
        {
            int idInt;
            try { idInt = int.Parse(id); }
            catch { idInt = -1; }

            if (idInt != notify.Id) return BadRequest("El id no concide");
            try
            {
                _context.Entry(notify).State = EntityState.Modified;
                await _context.SaveChangesAsync();

                return Ok(notify);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
            }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Notify>> DeleteNotify(string id)
        {
            try
            {
                Notify? notify = await _context.Notifies.FindAsync(int.Parse(id));
                if (notify == null) return NotFound();
                _context.Notifies.Remove(notify);
                await _context.SaveChangesAsync();
                return Ok(notify);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }

        }
    }
}
