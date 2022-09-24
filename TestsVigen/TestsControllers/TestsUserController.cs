using Vigen_Repository.Controllers;
using Vigen_Repository.Models;
using System;
using Xunit;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace TestsVigen.TestsControllers
{
    public class TestsUserController
    {
        private readonly vigendbContext _context;
        private readonly UsersController _controller;
        private User testUser;
        public TestsUserController()
        {
            _context = new vigendbContext();
            _controller = new UsersController(_context);

            testUser = new User() {
                Identification= Guid.NewGuid()
                .ToString()
                .Substring(0,10),

                Name= Guid.NewGuid()
                .ToString()
                .Substring(0, 30),

                Email= Guid.NewGuid()
                .ToString()
                .Substring(0,30),

                Occupation= Guid.NewGuid()
                .ToString()
                .Substring(0, 30),

                Ubication= Guid.NewGuid()
                .ToString()
                .Substring(0, 30),

                PostalCode= Guid.NewGuid()
                .ToString()
                .Substring(0, 30),

                CountryCode= Guid.NewGuid()
                .ToString()
                .Substring(0, 4),

                MaritalStatus= Guid.NewGuid()
                .ToString()
                .Substring(0, 30),

                Phone= Guid.NewGuid()
                .ToString()
                .Substring(0, 15),

                Birthdate = DateTime.Now,
            };
        }

        [Fact]
        public async Task TestCRUDUser()
        {
            await TestInsertUser();
            await TestGetUserById();
            await TestUpdateUser();
            await TestDeleteUser();

        }

        [Fact]
        public async Task TestGetAllUsers()
        {
            //Preparacion
            //Prueba
            var testCase = await _controller.GetUsers();
            //Verificacion
            Assert.IsType<OkObjectResult>(testCase);
        }

        public async Task TestGetUserById()
        {
            //Preparacion
            //Prueba
            var testCase= await _controller.GetUser(testUser.Identification);
            //Verificacion
            var user= Assert.IsType<OkObjectResult>(testCase);
        }

        public async Task TestInsertUser()
        {
            //Prueba
            await _controller.PostUser(testUser);
            //Verificacion
            Assert.True(_context.Users.Find(testUser.Identification) != null);
        }
        public async Task TestUpdateUser()
        {
            //Preparacion
            testUser.Name = "Name Update";
            //Prueba
            await _controller.PutUser(testUser.Identification, testUser);
            //Verificacion
            var user=_context.Users.Find(testUser.Identification);
            Assert.True(user?.Name == testUser.Name);
        }

        public async Task TestDeleteUser()
        {
            //Preparacion
            //Prueba
            await _controller.DeleteUser(testUser.Identification);
            //Verificacion
            var user = await _controller.GetUser(testUser.Identification);
            Assert.IsType<NotFoundResult>(user);
        }

    }
}
