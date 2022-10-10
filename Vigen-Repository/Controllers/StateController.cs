using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Vigen_Repository.Models;

namespace Vigen_Repository.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StateController : ControllerBase
    {
        private readonly vigendbContext _context;
        public StateController(vigendbContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<State>>> getStates()
        {
            List<State> states = await _context.States.ToListAsync();
            return Ok(states);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<State>> getState(string id)
        {
            State? state = await _context.States.FindAsync(id);
            if (state == null) return NotFound();
            return Ok(state);
        }

        [HttpPost]
        public async Task<ActionResult<State>> postState(State state)
        {
            try
            {
                await _context.States.AddAsync(state);
                await _context.SaveChangesAsync();
                return Ok(state);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<State>> UpdateStates(string id, State state)
        {
            if (id != state.Id) return BadRequest("El id no existe");
            try
            {
                _context.Entry(state).State = EntityState.Modified;
                await _context.SaveChangesAsync();

                return Ok(state);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<State>> DeleteSite(string id)
        {
            try
            {
                State? state = await _context.States.FindAsync(id);
                if (state == null) return NotFound();
                _context.States.Remove(state);
                await _context.SaveChangesAsync();
                return Ok(state);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }

        }
    }
}
