using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Vigen_Repository.Models;

namespace Vigen_Repository.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        readonly tvigendbContext _context;
        public UserController(tvigendbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<User> get(int id)
        {
            User? user = _context.Users.FirstOrDefault();
            if (user == null) return NotFound();
            else return user;
        }
    }
}
