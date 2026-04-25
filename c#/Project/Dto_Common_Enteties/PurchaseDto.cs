using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto_Common_Enteties
{
    internal class PurchaseDto
    {
        public int PurchaseId { get; set; }

    public int? ClientId { get; set; }

    public DateOnly? PurchaseDate { get; set; }

    public string? Note { get; set; }

    public int? AmountToBePaid { get; set; }

 
    }
}
