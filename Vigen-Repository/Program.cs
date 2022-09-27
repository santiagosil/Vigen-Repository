using Microsoft.EntityFrameworkCore;
using MailKit;
using Vigen_Repository.Models;


var builder = WebApplication.CreateBuilder(args);
string corsConfiguration = "_corsConfiguration";
// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<vigendbContext>(/*options=>
options.UseSqlServer(builder.Configuration.GetConnectionString("DevConnection"))*/);
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


builder.Services.AddCors(options =>
{
    options.AddPolicy(name: corsConfiguration,
        builder =>
        {
            builder.WithOrigins("http://localhost:4200");
        });
});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors(corsConfiguration);

app.MapControllers();

app.Run();
