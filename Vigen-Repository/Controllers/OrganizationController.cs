using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Vigen_Repository.Models;

namespace Vigen_Repository.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrganizationController : ControllerBase
    {
        private readonly vigendbContext _context;
        public OrganizationController(vigendbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult> getOrganizations()
        {
            List<Organization> organization = await _context.Organizations.ToListAsync();
            if (organization.Count == 0) return NoContent();
            return Ok(organization);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult> getOrganization(string id)
        {
            Organization? organization = await _context.Organizations.FindAsync(id);
            if (organization == null) return NotFound();
            return Ok(organization);
        }

        [HttpPost]
        public async Task<ActionResult> postOrganization(Organization organization)
        {
            try
            {
                await _context.Organizations.AddAsync(organization);
                await _context.SaveChangesAsync();
                return Ok(organization);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateOrganization(string id, Organization organization)
        {
            if (id != organization.Nit) return BadRequest("El Nit no concide");
            try
            {
                _context.Entry(organization).State = EntityState.Modified;
                await _context.SaveChangesAsync();

                return Ok(organization);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteOrganization(string id)
        {
            try
            {
                Organization? organization = await _context.Organizations.FindAsync(id);
                if(organization == null) return NotFound();
                _context.Organizations.Remove(organization);
                await _context.SaveChangesAsync();
                return Ok(organization);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }

        }
    }
}
