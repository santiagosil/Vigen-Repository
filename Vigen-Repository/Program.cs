var builder = WebApplication.CreateBuilder(args);
string corsConfiguration = "_corsConfiguration";
// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<Vigen_Repository.Models.tvigendbContext>();
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
