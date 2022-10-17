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
    public class TestViolenceTypeController
    {
        private readonly vigendbContext _context;
        private readonly ViolenceTypeController _controller;
        private ViolenceType testViolenceType;
        public TestViolenceTypeController()
        {
            _context = new vigendbContext();
            _controller = new ViolenceTypeController(_context);

            testViolenceType = new ViolenceType()
            {

                Description = Guid.NewGuid()
                .ToString()
                .Substring(0, 30),

                Name = Guid.NewGuid()
                .ToString()
                .Substring(0, 12)
            };
        }
        [Fact]
        public async Task testCrudViolenceType()
        {
            await TestInsertViolenceType();
            await TestGetViolenceTypeById();
            await TestUpdateViolenceType();
            await TestDeleteViolenceType();
        }
        public async Task TestInsertViolenceType()
        {
            //Preparacion

            //Prueba
            await _controller.postVioType(testViolenceType);
            var result = await _context.ViolenceTypes.FindAsync(testViolenceType.Id);
            //Verificacion
            Assert.Equal(testViolenceType, result);
        }

        [Fact]
        public async Task TestGetAllViolenceType()
        {
            //Preparacion
            //Prueba
            var testCase = await _controller.getVioTypes();
            //Verificacion
            Assert.IsType<OkObjectResult>(testCase.Result);
        }

        public async Task TestGetViolenceTypeById()
        {
            //Preparacion
            //Prueba
            var testCase = await _controller.getVioType(testViolenceType.Id.ToString());
            //Verificacion
            Assert.IsType<OkObjectResult>(testCase.Result);
        }

        public async Task TestUpdateViolenceType()
        {
            //Preparacion
            testViolenceType.Name = "Name Update";
            //Prueba
            await _controller.UpdateVioType(testViolenceType.Id.ToString(), testViolenceType);
            //Verificacion
            var state = await _context.ViolenceTypes.FindAsync(testViolenceType.Id);
            Assert.Equal(testViolenceType.Name, state?.Name);
        }

        public async Task TestDeleteViolenceType()
        {
            //Preparacion
            //Prueba
            await _controller.DeleteVioType(testViolenceType.Id.ToString());
            //Verificacion
            var state = await _controller.getVioType(testViolenceType.Id.ToString());
            Assert.IsType<NotFoundResult>(state.Result);
        }
    }
}
