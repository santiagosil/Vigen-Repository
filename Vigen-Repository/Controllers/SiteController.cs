using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Vigen_Repository.Models;

namespace Vigen_Repository.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SiteController : ControllerBase
    {
        private readonly vigendbContext _context;
        public SiteController(vigendbContext context)
        {
            _context = context;
        }
        [HttpGet("{nit}")]
        public async Task<ActionResult<List<Site>>> getSites(string nit)
        {
            List<Site> sites = _context.Sites.Where(x => x.Nit == nit).ToList();
            if (sites.Count == 0) return NoContent();
            return Ok(sites);
        }

        [HttpGet("{nit}/{id}")]
        public async Task<ActionResult<Site>> getSite(string nit,string id)
        {
            Site? site = await _context.Sites.FindAsync(nit,id);
            if (site == null) return NotFound();
            return Ok(site);
        }

        [HttpPost]
        public async Task<ActionResult<Site>> postSite(Site site)
        {
            try
            {
                await _context.Sites.AddAsync(site);
                await _context.SaveChangesAsync();
                return Ok(site);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{nit}/{id}")]
        public async Task<ActionResult<Site>> UpdateSite(string nit, string id, Site site)
        {
            if (nit!=site.Nit && id != site.Id) return BadRequest("El Nit no concide");
            try
            {
                _context.Entry(site).State = EntityState.Modified;
                await _context.SaveChangesAsync();

                return Ok(site);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpDelete("{nit}/{id}")]
        public async Task<ActionResult<Site>> DeleteSite(string nit, string id)
        {
            try
            {
                Site? site = await _context.Sites.FindAsync(nit,id);
                if (site == null) return NotFound();
                _context.Sites.Remove(site);
                await _context.SaveChangesAsync();
                return Ok(site);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }

        }
    }
}
