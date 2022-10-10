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
    public class TestOrgTypeController
    {
        private readonly vigendbContext _context;
        private readonly OrganizationTypeController _controller;
        private OrganizationType testOrgType;
        public TestOrgTypeController()
        {
            _context = new vigendbContext();
            _controller = new OrganizationTypeController(_context);

            testOrgType = new OrganizationType()
            {
                Description = Guid.NewGuid()
                .ToString()
                .Substring(0, 30),
                Name = Guid.NewGuid()
                .ToString()
                .Substring(0, 30)
            };
        }
        [Fact]
        public async Task testCrudOrgType()
        {
            await TestInsertOrgType();
            await TestGetOrgTypeById();
            await TestUpdateOrgType();
            await TestDeleteOrgType();
        }
        public async Task TestInsertOrgType()
        {
            //Preparacion

            //Prueba
            await _controller.postOrgType(testOrgType);
            var result = await _context.OrganizationTypes.FindAsync(testOrgType.Id);
            //Verificacion
            Assert.Equal(testOrgType, result);
        }

        [Fact]
        public async Task TestGetAllOrgTypes()
        {
            //Preparacion
            //Prueba
            var testCase = await _controller.getOrgTypes();
            //Verificacion
            Assert.IsType<OkObjectResult>(testCase.Result);
        }

        public async Task TestGetOrgTypeById()
        {
            //Preparacion
            //Prueba
            var testCase = await _controller.getOrgType(testOrgType.Id.ToString());
            //Verificacion
            Assert.IsType<OkObjectResult>(testCase.Result);
        }

        public async Task TestUpdateOrgType()
        {
            //Preparacion
            testOrgType.Name = "Name Update";
            //Prueba
            await _controller.UpdateOrgType(testOrgType.Id.ToString(), testOrgType);
            //Verificacion
            var orgType = await _context.OrganizationTypes.FindAsync(testOrgType.Id);
            Assert.Equal(testOrgType.Name, orgType?.Name);
        }

        public async Task TestDeleteOrgType()
        {
            //Preparacion
            //Prueba
            await _controller.DeleteOrgType(testOrgType.Id.ToString());
            //Verificacion
            var orgType = await _controller.getOrgType(testOrgType.Id.ToString());
            Assert.IsType<NotFoundResult>(orgType.Result);
        }
    }
}
