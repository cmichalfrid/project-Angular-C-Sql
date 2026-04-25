using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal_Repository.ModelsConverters
{
    internal class ProductConverter
    {
        public ProductConverter() { }
        public static Dto_Common_Enteties.ProductDto ToProductDto(models.Product p)
        {
            Dto_Common_Enteties.ProductDto pd = new Dto_Common_Enteties.ProductDto();
            pd.ProductId = p.ProductId;
            pd.ProductName = p.ProductName;
            pd.CategoryName = p.Category.CategoryName;
            pd.ProductDes= p.ProductDes;
            pd.Picture= p.Picture;
           pd.CompanyName = p.Company.CompanyName;
            pd.Price = p.Price;
            pd.LastUpdate = p.LastUpdate;
            pd.TargetAge = p.TargetAge;

            return pd;
        }
        public static List<Dto_Common_Enteties.ProductDto> ToProductDtoList(List<models.Product> lp)
        {
            List<Dto_Common_Enteties.ProductDto> lpd=new List<Dto_Common_Enteties.ProductDto> ();
            foreach (var p in lp)
            {
                lpd.Add(ToProductDto(p));
            }
            return lpd;
        }
    }
}
