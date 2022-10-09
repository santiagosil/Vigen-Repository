using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Vigen_Repository.Models;

namespace Vigen_Repository.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ViolenceTypeOrganizationController : ControllerBase
    {
        private readonly vigendbContext _context;
        public ViolenceTypeOrganizationController(vigendbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<ViolenceTypesOrganization>>> getVioTypesOrg()
        {
            List<ViolenceTypesOrganization> vioTypesOrg = await _context.ViolenceTypesOrganizations.ToListAsync();
            if (vioTypesOrg.Count == 0) return NoContent();
            return Ok(vioTypesOrg);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ViolenceTypesOrganization>> getVioTypesOrg(string id)
        {
            ViolenceTypesOrganization? vioTypesOrg = await _context.ViolenceTypesOrganizations.FindAsync(id);
            if (vioTypesOrg == null) return NotFound();
            return Ok(vioTypesOrg);
        }

        [HttpPost]
        public async Task<ActionResult<ViolenceTypesOrganization>> postVioType(ViolenceTypesOrganization vioTypesOrg)
        {
            try
            {
                await _context.ViolenceTypesOrganizations.AddAsync(vioTypesOrg);
                await _context.SaveChangesAsync();
                return Ok(vioTypesOrg);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<ViolenceTypesOrganization>> UpdateVioTypeOrg(string id, ViolenceTypesOrganization vioTypeOrg)
        {
            int idInt;
            try { idInt = int.Parse(id); }
            catch { idInt = -1; }

            if (idInt != vioTypeOrg.IdViolence) return BadRequest("El id no concide");
            try
            {
                _context.Entry(vioTypeOrg).State = EntityState.Modified;
                await _context.SaveChangesAsync();

                return Ok(vioTypeOrg);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<ViolenceTypesOrganization>> DeleteVioTypeOrg(string id)
        {
            try
            {
                ViolenceTypesOrganization? vioTypeOrg = await _context.ViolenceTypesOrganizations.FindAsync(id);
                if (vioTypeOrg == null) return NotFound();
                _context.ViolenceTypesOrganizations.Remove(vioTypeOrg);
                await _context.SaveChangesAsync();
                return Ok(vioTypeOrg);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }

        }
    }
}
