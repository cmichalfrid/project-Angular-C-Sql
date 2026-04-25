var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(a => a.AddPolicy("AllowAll"
,builder => {
    //builder.AllowAnyOrigin()
    builder.AllowAnyOrigin()
// רשות לגישה מכתובת זו
.AllowAnyMethod() // רשות לכל סוגי השיטות (GET, POST, PUT וכו')
.AllowAnyHeader();// רשות לכל סוגי הכותרות

}));
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("AllowAll");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
