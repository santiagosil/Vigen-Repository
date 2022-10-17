using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Vigen_Repository.Models;

namespace Vigen_Repository.Controllers
{
    [Route("api/[controller]/[Action]")]
    [ApiController]
    public class ReporteController : ControllerBase
    {
        private readonly vigendbContext _context;
        public ReporteController(vigendbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<Object>> Prueba()
        {
            var reporte = await (from x in _context.Users
                           join y in _context.Notifies on x.Identification equals y.UserId
                           select new { x.Identification, x.Name, x.Birthdate, y.StateId, y.Description }).ToListAsync();
            return Ok(reporte);
        }

        [HttpGet]
        public async Task<ActionResult<Object>> Usuarios()
        {
            var reporte = await (from x in _context.Users
                                 select new { x.Identification, x.Name, x.Birthdate, x.Email, x.Occupation,x.MaritalStatus, x.Ubication}).ToListAsync();
            return Ok(reporte);
        }

        [HttpGet]
        public async Task<ActionResult<Object>> Organization()
        {
            var reporte = await (from x in _context.Organizations
                                 join y in _context.Sites on x.Nit equals y.Nit
                                 select new { x.Nit, x.Name, x.Tel, y.Range, y.Ubication}).ToListAsync();
            return Ok(reporte);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Object>> NotifiesServiced(string id)
        {
            int idAux;
            try { idAux = int.Parse(id); }
            catch { idAux = -1; }
            var reporte = await (from x in _context.Notifies
                                 join y in _context.States on x.StateId equals y.Id
                                 join z in _context.Users on x.UserId equals z.Identification
                                 where x.StateId == idAux                                
                                 select new { z.Identification, z.Name, z.Ubication,z.CountryCode, z.Phone, x.Description}).ToListAsync();
            return Ok(reporte);
        }
    }
}
