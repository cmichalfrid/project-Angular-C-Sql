namespace Dto_Common_Enteties
{
    public class ProductDto
    {
        public string? ProductName { get; set; }

        public int ProductId { get; set; }

        public int? TargetAge { get; set; }

        public string? CategoryName { get; set; }
        
        public string? CompanyName { get; set; }
        
        public string? Picture { get; set; }

        public string? ProductDes { get; set; }

        public int? Price { get; set; }

        public DateOnly? LastUpdate { get; set; }
    }
}
