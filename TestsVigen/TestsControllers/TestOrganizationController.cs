using Vigen_Repository.Controllers;
using Vigen_Repository.Models;
using System;
using Xunit;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace TestsVigen.TestsControllers
{
    public class TestOrganizationController
    {
        private readonly vigendbContext _context;
        private readonly OganizationsController _controller;
        private Oganization testOrg;
        public TestOrganizationController()
        {
            _context = new vigendbContext();
            _controller = new OganizationsController(_context);

            testOrg = new Oganization()
            {
                Nit = Guid.NewGuid()
                .ToString()
                .Substring(0, 10),

                Name=Guid.NewGuid()
                .ToString()
                .Substring(0, 15),

                Tel = Guid.NewGuid()
                .ToString()
                .Substring(0, 15),

                Range = new Random().Next(0,100),

                Ubication = Guid.NewGuid()
                .ToString()
                .Substring(0, 30),

                Phone = Guid.NewGuid()
                .ToString()
                .Substring(0, 15),
            };
        }

        [Fact]
        public async Task testCrudOrg()
        {
            await TestInsertOrg();
            await TestGetOrgById();
            await TestUpdateOrg();
            await TestDeleteOrg();
        }
        public async Task TestInsertOrg()
        {
            //Preparacion

            //Prueba
            await _controller.PostOganization(testOrg);
            //Verificacion
            Assert.True(_context.Oganizations.Find(testOrg.Nit) != null);
        }

        [Fact]
        public async Task TestGetAllOrg()
        {
            //Preparacion
            //Prueba
            var testCase = await _controller.GetOganizations();
            //Verificacion
            Assert.IsType<OkObjectResult>(testCase);
        }

        public async Task TestGetOrgById()
        {
            //Preparacion
            //Prueba
            var testCase = await _controller.GetOganization(testOrg.Nit);
            //Verificacion
            var organization = Assert.IsType<OkObjectResult>(testCase);
        }

        public async Task TestUpdateOrg()
        {
            //Preparacion
            testOrg.Name = "Name Update";
            //Prueba
            await _controller.PutOganization(testOrg.Nit, testOrg);
            //Verificacion
            var organization = _context.Oganizations.Find(testOrg.Nit);
            Assert.True(organization?.Name == testOrg.Name);
        }
        
        public async Task TestDeleteOrg()
        {
            //Preparacion
            //Prueba
            await _controller.DeleteOganization(testOrg.Nit);
            //Verificacion
            var organization = await _controller.GetOganization(testOrg.Nit);
            Assert.IsType<NotFoundResult>(organization);
        }
    }
}
