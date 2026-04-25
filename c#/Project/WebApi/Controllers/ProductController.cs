using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProductController : ControllerBase
    {
        [HttpGet]
        public async Task<List<Dto_Common_Enteties.ProductDto>> Get()
        {
            return await Bll_Services.ProductBll.SelectAllProducts();//לבדוק pageing איך עוד..
        }
    }
}
