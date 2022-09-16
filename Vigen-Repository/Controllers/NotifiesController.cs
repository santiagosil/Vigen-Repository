using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Vigen_Repository.Models;

namespace Vigen_Repository.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NotifiesController : ControllerBase
    {
        private readonly vigenContext _context;

        public NotifiesController(vigenContext context)
        {
            _context = context;
        }

        // GET: api/Notifies
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Notify>>> GetNotifies()
        {
          if (_context.Notifies == null)
          {
              return NotFound();
          }
            return await _context.Notifies.ToListAsync();
        }

        // GET: api/Notifies/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Notify>> GetNotify(int id)
        {
          if (_context.Notifies == null)
          {
              return NotFound();
          }
            var notify = await _context.Notifies.FindAsync(id);

            if (notify == null)
            {
                return NotFound();
            }

            return notify;
        }

        // PUT: api/Notifies/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutNotify(int id, Notify notify)
        {
            if (id != notify.Id)
            {
                return BadRequest();
            }

            _context.Entry(notify).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NotifyExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Notifies
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Notify>> PostNotify(Notify notify)
        {
          if (_context.Notifies == null)
          {
              return Problem("Entity set 'vigenContext.Notifies'  is null.");
          }
            _context.Notifies.Add(notify);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetNotify", new { id = notify.Id }, notify);
        }

        // DELETE: api/Notifies/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNotify(int id)
        {
            if (_context.Notifies == null)
            {
                return NotFound();
            }
            var notify = await _context.Notifies.FindAsync(id);
            if (notify == null)
            {
                return NotFound();
            }

            _context.Notifies.Remove(notify);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool NotifyExists(int id)
        {
            return (_context.Notifies?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
