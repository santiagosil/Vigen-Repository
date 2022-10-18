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
        private readonly OrganizationController _controller;
        private Organization testOrg;
        public TestOrganizationController()
        {
            _context = new vigendbContext();
            _controller = new OrganizationController(_context);

            testOrg = new Organization()
            {
                Nit = Guid.NewGuid()
                .ToString()
                .Substring(0, 10),
                Password = Guid.NewGuid().ToString().Substring(0, 10),
                Name = Guid.NewGuid().ToString().Substring(0, 30),
                Tel = Guid.NewGuid().ToString().Substring(0, 10),
                Phone = Guid.NewGuid().ToString().Substring(0, 10),
                OrganizationTypeID = 1
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
            await _controller.postOrganization(testOrg);
            var result = await _context.Organizations.FindAsync(testOrg.Nit);
            //Verificacion
            Assert.Equal(testOrg, result);
        }

        [Fact]
        public async Task TestGetAllOrg()
        {
            //Preparacion
            //Prueba
            var testCase = await _controller.getOrganizations();
            //Verificacion
            Assert.IsType<OkObjectResult>(testCase.Result);
        }

        public async Task TestGetOrgById()
        {
            //Preparacion
            //Prueba
            var testCase = await _controller.getOrganization(testOrg.Nit);
            //Verificacion
            Assert.IsType<OkObjectResult>(testCase.Result);
        }

        public async Task TestUpdateOrg()
        {
            //Preparacion
            testOrg.Name = "Name Update";
            //Prueba
            await _controller.UpdateOrganization(testOrg.Nit.ToString(), testOrg);
            //Verificacion
            var organization = await _context.Organizations.FindAsync(testOrg.Nit);
            Assert.Equal(testOrg.Name, organization?.Name);
        }

        public async Task TestDeleteOrg()
        {
            //Preparacion
            //Prueba
            await _controller.DeleteOrganization(testOrg.Nit);
            //Verificacion
            var organization = await _controller.getOrganization(testOrg.Nit);
            Assert.IsType<NotFoundResult>(organization.Result);
        }
    }
}
