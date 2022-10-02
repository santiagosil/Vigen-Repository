using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Vigen_Repository.Models;

namespace Vigen_Repository.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotifyController : ControllerBase
    {
        private readonly vigendbContext _context;
        public NotifyController(vigendbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult> getNotifies()
        {
            List<Notify> notifies = await _context.Notifies.ToListAsync();
            if (notifies.Count == 0) return NoContent();
            return Ok(notifies);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> getNotify(string id)
        {
            Notify? notify = await _context.Notifies.FindAsync(id);
            if (notify == null) return NotFound();
            return Ok(notify);
        }

        [HttpPost]
        public async Task<ActionResult> postUser(Notify notify)
        {
            try
            {
                await _context.Notifies.AddAsync(notify);
                await _context.SaveChangesAsync();
                return Ok(notify);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateNotify(string id, Notify notify)
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
        public async Task<ActionResult> DeleteNotify(string id)
        {
            try
            {
                Notify? notify = await _context.Notifies.FindAsync(id);
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
