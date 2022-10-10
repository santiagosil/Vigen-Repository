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
        private readonly UserController _controller;
        private User testUser;
        public TestsUserController()
        {
            _context = new vigendbContext();
            _controller = new UserController(_context);

            testUser = new User() {
                Identification = Guid.NewGuid()
                .ToString()
                .Substring(0, 10),
                Password = Guid.NewGuid()
                .ToString()
                .Substring(0, 10),
                Code = Guid.NewGuid()
                .ToString()
                .Substring(0, 4),
                Verification = false,

                Name = Guid.NewGuid()
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
        public async Task testCrudUser()
        {
            await TestInsertUser();
            await TestGetUserById();
            await TestUpdateUser();
            await TestDeleteUser();
        }
        public async Task TestInsertUser()
        {
            //Preparacion

            //Prueba
            await _controller.postUser(testUser);
            var result = await _context.Users.FindAsync(testUser.Identification);
            //Verificacion
            Assert.Equal(testUser, result);
        }

        [Fact]
        public async Task TestGetAllUser()
        {
            //Preparacion
            //Prueba
            var testCase = await _controller.getUsers();
            //Verificacion
            Assert.IsType<OkObjectResult>(testCase.Result);
        }

        public async Task TestGetUserById()
        {
            //Preparacion
            //Prueba
            var testCase = await _controller.getUser(testUser.Identification);
            //Verificacion
            Assert.IsType<OkObjectResult>(testCase.Result);
        }

        public async Task TestUpdateUser()
        {
            //Preparacion
            testUser.Name = "Name Update";
            //Prueba
            await _controller.UpdateUser(testUser.Identification, testUser);
            //Verificacion
            var user = await _context.Users.FindAsync(testUser.Identification);
            Assert.Equal(testUser.Name, user?.Name);
        }

        public async Task TestDeleteUser()
        {
            //Preparacion
            //Prueba
            await _controller.DeleteUser(testUser.Identification);
            //Verificacion
            var user = await _controller.getUser(testUser.Identification);
            Assert.IsType<NotFoundResult>(user.Result);
        }
    }
}
