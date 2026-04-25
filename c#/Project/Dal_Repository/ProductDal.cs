using Dal_Repository.models;
using Microsoft.EntityFrameworkCore;

namespace Dal_Repository
{
    public class ProductDal
    {
        
        public static async Task<List<Dto_Common_Enteties.ProductDto>>SelectAllProducts()
        {
            using (ToyStoreProjectContext db = new ToyStoreProjectContext())
            {
                var l =await db.Products.Include(p=> p.Category).Include(j=>j.Company).ToListAsync();
                
                return ModelsConverters.ProductConverter.ToProductDtoList(l);
            }
        }

        public static async Task<List<Dto_Common_Enteties.ProductDto>> SelectProductsByCategory(string category1)
        {
            using (ToyStoreProjectContext db = new ToyStoreProjectContext())
            {
                var l = await db.Products.Include(p => p.Category).Include(j => j.Company).ToListAsync();

                return ModelsConverters.ProductConverter.ToProductDtoList(l.FindAll(a => a.Category.CategoryName == category1));
            }
        }
    }
}
