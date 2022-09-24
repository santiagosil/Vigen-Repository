using Vigen_Repository.Controllers;
using Vigen_Repository.Models;
using System;
using Xunit;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace TestsVigen.TestsControllers
{
    public class TestNotifyController
    {
        private readonly vigendbContext _context;
        private readonly NotifiesController _controller;
        private Notify testNotify;
        public TestNotifyController()
        {
            _context = new vigendbContext();
            _controller = new NotifiesController(_context);

            testNotify = new Notify()
            {
                Id = 1,
                Title = Guid.NewGuid()
                .ToString()
                .Substring(0, 10),
                Place = Guid.NewGuid()
                .ToString()
                .Substring(0, 10),
                Identification = "123456789",
                Distance = new Random().Next(0, 100)
            };
        }

        [Fact]
        public async Task testCrudNotify()
        {
            await TestInsertNotify();
            //await TestGetOrgById();
            //await TestUpdateOrg();
            //await TestDeleteOrg();
        }
        public async Task TestInsertNotify()
        {
            //Preparacion

            //Prueba
            var notify = await _controller.PostNotify(testNotify);
            testNotify.Id = notify.Id;
            //Verificacion
            Assert.True(_context.Notifies.Find(testNotify.Id) != null);
        }

        [Fact]
        public async Task TestGetAllNotifies()
        {
            //Preparacion
            //Prueba
            var testCase = await _controller.GetNotifies();
            //Verificacion
            Assert.IsType<OkObjectResult>(testCase);
        }

        public async Task TestGetNotifyById()
        {
            //Preparacion
            //Prueba
            var testCase = await _controller.GetNotify(testNotify.Id);
            //Verificacion
            var notify = Assert.IsType<OkObjectResult>(testCase);
        }

        public async Task TestUpdateNotify()
        {
            //Preparacion
            testNotify.Title = "Title Update";
            //Prueba
            await _controller.PutNotify(testNotify.Id, testNotify);
            //Verificacion
            var notify = _context.Notifies.Find(testNotify.Id);
            Assert.True(notify.Title == testNotify.Title);
        }

        public async Task TestDeleteNotify()
        {
            //Preparacion
            //Prueba
            await _controller.DeleteNotify(testNotify.Id);
            //Verificacion
            var organization = await _controller.GetNotify(testNotify.Id);
            Assert.IsType<NotFoundResult>(organization);
        }
    }
}
