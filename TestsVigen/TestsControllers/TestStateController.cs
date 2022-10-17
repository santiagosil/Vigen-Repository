using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Vigen_Repository.Controllers;
using Vigen_Repository.Models;
using Xunit;

namespace TestsVigen.TestsControllers
{
    public class TestStateController
    {
        private readonly vigendbContext _context;
        private readonly StateController _controller;
        private State testState;
        public TestStateController()
        {
            _context = new vigendbContext();
            _controller = new StateController(_context);

            testState = new State()
            {

                Description= Guid.NewGuid()
                .ToString()
                .Substring(0, 30),

                Name = Guid.NewGuid()
                .ToString()
                .Substring(0, 12)
            };
        }
        [Fact]
        public async Task testCrudState()
        {
            await TestInsertState();
            await TestGetStateById();
            await TestUpdateState();
            await TestDeleteState();
        }
        public async Task TestInsertState()
        {
            //Preparacion

            //Prueba
            await _controller.postState(testState);
            var result = await _context.States.FindAsync(testState.Id);
            //Verificacion
            Assert.Equal(testState, result);
        }

        [Fact]
        public async Task TestGetAllState()
        {
            //Preparacion
            //Prueba
            var testCase = await _controller.getStates();
            //Verificacion
            Assert.IsType<OkObjectResult>(testCase.Result);
        }

        public async Task TestGetStateById()
        {
            //Preparacion
            //Prueba
            var testCase = await _controller.getState(testState.Id.ToString());
            //Verificacion
            Assert.IsType<OkObjectResult>(testCase.Result);
        }

        public async Task TestUpdateState()
        {
            //Preparacion
            testState.Name = "Name Update";
            //Prueba
            await _controller.UpdateStates(testState.Id.ToString(), testState);
            //Verificacion
            var state = await _context.States.FindAsync(testState.Id);
            Assert.Equal(testState.Name, state?.Name);
        }

        public async Task TestDeleteState()
        {
            //Preparacion
            //Prueba
            await _controller.DeleteState(testState.Id.ToString());
            //Verificacion
            var state = await _controller.getState(testState.Id.ToString());
            Assert.IsType<NotFoundResult>(state.Result);
        }
    }
}
