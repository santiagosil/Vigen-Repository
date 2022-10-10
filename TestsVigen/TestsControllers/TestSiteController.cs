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
    public class TestSiteController
    {
        private readonly vigendbContext _context;
        private readonly SiteController _controller;
        private Site testSite;
        public TestSiteController()
        {
            _context = new vigendbContext();
            _controller = new SiteController(_context);

            testSite = new Site()
            {
                
                Nit="8032546897",

                CountryCode= Guid.NewGuid()
                .ToString()
                .Substring(0, 3),

                Phone= Guid.NewGuid()
                .ToString()
                .Substring(0, 12),

                Range=new Random().Next(0,30),

                Tel= Guid.NewGuid()
                .ToString()
                .Substring(0, 12),

                Ubication= Guid.NewGuid()
                .ToString()
                .Substring(0, 30)
            };
        }
        [Fact]
        public async Task testCrudSite()
        {
            await TestInsertSite();
            await TestGetSiteById();
            await TestUpdateSite();
            await TestDeleteSite();
        }
        public async Task TestInsertSite()
        {
            //Preparacion

            //Prueba
            await _controller.postSite(testSite);
            var result = await _context.Sites.FindAsync(testSite.Id);
            //Verificacion
            Assert.Equal(testSite, result);
        }

        [Fact]
        public async Task TestGetAllSite()
        {
            //Preparacion
            //Prueba
            var testCase = await _controller.getSites(testSite.Nit);
            //Verificacion
            Assert.IsType<OkObjectResult>(testCase.Result);
        }

        public async Task TestGetSiteById()
        {
            //Preparacion
            //Prueba
            var testCase = await _controller.getSite(testSite.Id.ToString());
            //Verificacion
            Assert.IsType<OkObjectResult>(testCase.Result);
        }

        public async Task TestUpdateSite()
        {
            //Preparacion
            testSite.Ubication = "Ubication Update";
            //Prueba
            await _controller.UpdateSite(testSite.Nit,testSite.Id.ToString(), testSite);
            //Verificacion
            var site = await _context.Sites.FindAsync(testSite.Id);
            Assert.Equal(testSite.Ubication, site?.Ubication);
        }

        public async Task TestDeleteSite()
        {
            //Preparacion
            //Prueba
            await _controller.DeleteSite(testSite.Id.ToString());
            //Verificacion
            var site = await _controller.getSite(testSite.Id.ToString());
            Assert.IsType<NotFoundResult>(site.Result);
        }
    }
}
