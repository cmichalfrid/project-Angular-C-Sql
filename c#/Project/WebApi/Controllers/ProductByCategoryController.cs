using Microsoft.AspNetCore.Mvc;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("[controller]")]

    public class ProductByCategoryController : Controller
    {
        [HttpGet ("{category1}")]
        public async Task<List<Dto_Common_Enteties.ProductDto>> GetByCategory(string category1)
        {
            return await Bll_Services.ProductBll.SelectProductsByCategory(category1);
        }
    }
    }




   

