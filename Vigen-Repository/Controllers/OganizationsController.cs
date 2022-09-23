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
    public class OganizationsController : ControllerBase
    {
        private readonly vigendbContext _context;

        public OganizationsController(vigendbContext context)
        {
            _context = context;
        }

        // GET: api/Oganizations
        [HttpGet]
        public async Task<ActionResult> GetOganizations()
        {
            if (_context.Oganizations == null)
            {
                return NotFound();
            }
            var list = await _context.Oganizations.ToListAsync();
            return Ok(list);
        }

        // GET: api/Oganizations/5
        [HttpGet("{id}")]
        public async Task<ActionResult> GetOganization(string id)
        {
            if (_context.Oganizations == null)
            {
                return NotFound();
            }
            var oganization = await _context.Oganizations.FindAsync(id);

            if (oganization == null)
            {
                return NotFound();
            }

            return Ok(oganization);
        }

        // PUT: api/Oganizations/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutOganization(string id, Oganization oganization)
        {
            if (id != oganization.Nit)
            {
                return BadRequest();
            }

            _context.Entry(oganization).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!OganizationExists(id))
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

        // POST: api/Oganizations
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult> PostOganization(Oganization oganization)
        {
            if (_context.Oganizations == null)
            {
                return Problem("Entity set 'vigenContext.Oganizations'  is null.");
            }
            _context.Oganizations.Add(oganization);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (OganizationExists(oganization.Nit))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetOganization", new { id = oganization.Nit }, oganization);
        }

        // DELETE: api/Oganizations/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOganization(string id)
        {
            if (_context.Oganizations == null)
            {
                return NotFound();
            }
            var oganization = await _context.Oganizations.FindAsync(id);
            if (oganization == null)
            {
                return NotFound();
            }

            _context.Oganizations.Remove(oganization);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool OganizationExists(string id)
        {
            return (_context.Oganizations?.Any(e => e.Nit == id)).GetValueOrDefault();
        }
    }
}