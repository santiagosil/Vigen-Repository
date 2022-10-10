using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Vigen_Repository.Models;

namespace Vigen_Repository.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ViolenceTypeController : ControllerBase
    {
        private readonly vigendbContext _context;
        public ViolenceTypeController(vigendbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<ViolenceType>>> getVioTypes()
        {
            List<ViolenceType> vioTypes = await _context.ViolenceTypes.ToListAsync();
            if (vioTypes.Count == 0) return NoContent();
            return Ok(vioTypes);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ViolenceType>> getVioType(string id)
        {
            ViolenceType? vioType = await _context.ViolenceTypes.FindAsync(id);
            if (vioType == null) return NotFound();
            return Ok(vioType);
        }

        [HttpPost]
        public async Task<ActionResult<ViolenceType>> postVioType(ViolenceType vioType)
        {
            try
            {
                await _context.ViolenceTypes.AddAsync(vioType);
                await _context.SaveChangesAsync();
                return Ok(vioType);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<ViolenceType>> UpdateVioType(string id, ViolenceType vioType)
        {
            int idInt;
            try { idInt = int.Parse(id); }
            catch { idInt = -1; }

            if (idInt != vioType.Id) return BadRequest("El id no concide");
            try
            {
                _context.Entry(vioType).State = EntityState.Modified;
                await _context.SaveChangesAsync();

                return Ok(vioType);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<ViolenceType>> DeleteVioType(string id)
        {
            try
            {
                ViolenceType? vioType = await _context.ViolenceTypes.FindAsync(id);
                if (vioType == null) return NotFound();
                _context.ViolenceTypes.Remove(vioType);
                await _context.SaveChangesAsync();
                return Ok(vioType);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }

        }
    }
}
