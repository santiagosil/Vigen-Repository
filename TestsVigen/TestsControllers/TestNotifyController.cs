using Vigen_Repository.Controllers;
using Vigen_Repository.Models;
using System;
using Xunit;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Microsoft.AspNetCore.SignalR;

namespace TestsVigen.TestsControllers
{
    public class TestNotifyController
    {
        private readonly vigendbContext _context;
        private readonly NotifyController _controller;
        private readonly IHubContext<BroadCastHub,IHubClient> _hubContext;
        private Notify testNotify;
        public TestNotifyController()
        {
            _context = new vigendbContext();
            _controller = new NotifyController(_context,_hubContext);

            testNotify = new Notify()
            {
                Title = Guid.NewGuid()
                .ToString()
                .Substring(0, 10),
                StateId = new Random().Next(1, 2),
                Description = Guid.NewGuid().ToString().Substring(0, 30),
                OrganizationTypeId = 1,
                UserId = "123456789"
            };
        }

        [Fact]
        public async Task testCrudNotify()
        {
            await TestInsertNotify();
            await TestGetNotifyById();
            await TestUpdateNotify();
            await TestDeleteNotify();
        }
        public async Task TestInsertNotify()
        {
            //Preparacion

            //Prueba
            await _controller.postNotify(testNotify);
            var result = await _context.Notifies.FindAsync(testNotify.Id);
            //Verificacion
            Assert.Equal(testNotify,result);
        }

        [Fact]
        public async Task TestGetAllNotifies()
        {
            //Preparacion
            //Prueba
            var testCase = await _controller.getNotifies();
            //Verificacion
            Assert.IsType<OkObjectResult>(testCase.Result);
        }

        public async Task TestGetNotifyById()
        {
            //Preparacion
            //Prueba
            var testCase = await _controller.getNotify(testNotify.Id.ToString());
            //Verificacion
            Assert.IsType<OkObjectResult>(testCase.Result);
        }

        public async Task TestUpdateNotify()
        {
            //Preparacion
            testNotify.Title = "Title Update";
            //Prueba
            await _controller.UpdateNotify(testNotify.Id.ToString(), testNotify);
            //Verificacion
            var notify = await _context.Notifies.FindAsync(testNotify.Id);
            Assert.Equal(testNotify.Title, notify?.Title);
        }

        public async Task TestDeleteNotify()
        {
            //Preparacion
            //Prueba
            await _controller.DeleteNotify(testNotify.Id.ToString());
            //Verificacion
            var notify = await _controller.getNotify(testNotify.Id.ToString());
            Assert.IsType<NotFoundResult>(notify.Result);
        }
    }
}
