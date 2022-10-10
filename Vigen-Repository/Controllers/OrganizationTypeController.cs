using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Vigen_Repository.Models;

namespace Vigen_Repository.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrganizationTypeController : ControllerBase
    {
        private readonly vigendbContext _context;
        public OrganizationTypeController(vigendbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<OrganizationType>>> getOrgTypes()
        {
            List<OrganizationType> orgTypes = await _context.OrganizationTypes.ToListAsync();
            if (orgTypes.Count == 0) return NoContent();
            return Ok(orgTypes);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<OrganizationType>> getOrgType(string id)
        {
            int auxId;
            try { auxId = int.Parse(id); }
            catch { auxId=-1;}
            OrganizationType? orgType = await _context.OrganizationTypes.FindAsync(auxId);
            if (orgType == null) return NotFound();
            return Ok(orgType);
        }

        [HttpPost]
        public async Task<ActionResult<OrganizationType>> postOrgType(OrganizationType orgType)
        {
            try
            {
                await _context.OrganizationTypes.AddAsync(orgType);
                await _context.SaveChangesAsync();
                return Ok(orgType);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<OrganizationType>> UpdateOrgType(string id, OrganizationType orgType)
        {
            if (id != orgType.Id.ToString()) return BadRequest("El id no concide");
            try
            {
                _context.Entry(orgType).State = EntityState.Modified;
                await _context.SaveChangesAsync();

                return Ok(orgType);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<OrganizationType>> DeleteOrgType(string id)
        {
            try
            {
                OrganizationType? orgType = await _context.OrganizationTypes.FindAsync(int.Parse(id));
                if (orgType == null) return NotFound();
                _context.OrganizationTypes.Remove(orgType);
                await _context.SaveChangesAsync();
                return Ok(orgType);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }

        }
    }
}
