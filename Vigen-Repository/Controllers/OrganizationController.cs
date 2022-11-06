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
        public async Task<ActionResult<List<Organization>>> getOrganizations()
        {
            List<Organization> organization = await _context.Organizations.ToListAsync();
            if (organization.Count == 0) return NoContent();
            return Ok(organization);
        }

        [HttpGet("{user}/{password}")]
        public async Task<ActionResult<Object>> loginUser(string user, string password)
        {
            Organization? orgObject = await _context.Organizations.FindAsync(user);
            if (orgObject?.Password != password)
            {
                return null;
            }
            return new { name = orgObject.Name };
        }

        [HttpGet("{nit}")]
        public async Task<ActionResult<Organization>> getOrganization(string nit)
        {
            Organization? organization = await _context.Organizations.FindAsync(nit);
            if (organization == null) return NotFound();
            return Ok(organization);
        }

        [HttpPost]
        public async Task<ActionResult<Organization>> postOrganization(Organization organization)
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

        [HttpPut("{nit}")]
        public async Task<ActionResult<Organization>> UpdateOrganization(string nit, Organization organization)
        {
            if (nit != organization.Nit) return BadRequest("El Nit no concide");
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

        [HttpDelete("{nit}")]
        public async Task<ActionResult<Organization>> DeleteOrganization(string nit)
        {
            try
            {
                Organization? organization = await _context.Organizations.FindAsync(nit);
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
