using Dal_Repository.models;
using Dto_Common_Enteties;
using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class ClientController : Controller
    {


        [HttpGet("{checkNumber}")]
        public async Task<Dto_Common_Enteties.ClientDto> GetByPhoneNumber(string checkNumber)
        {
            return await Bll_Services.ClientBll.SelectClientByPhoneNumber(checkNumber);
        }
        [HttpPost]

        public async void PostClient(Dto_Common_Enteties.ClientDto c)
        { 
          
            Bll_Services.ClientBll.PostClient(c);
        }


    }
}

