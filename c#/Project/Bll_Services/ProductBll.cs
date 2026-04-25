
using Dto_Common_Enteties;

namespace Bll_Services
{
    public class ProductBll
    {
        public static async Task<List<Dto_Common_Enteties.ProductDto>> SelectAllProducts()
        {


            return await Dal_Repository.ProductDal.SelectAllProducts();
        }




        public static async Task<List<Dto_Common_Enteties.ProductDto>> SelectProductsByCategory(string category1)
        {


            return await Dal_Repository.ProductDal.SelectProductsByCategory( category1);
        }

    }
}
