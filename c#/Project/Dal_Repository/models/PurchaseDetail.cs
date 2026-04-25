using System;
using System.Collections.Generic;

namespace Dal_Repository.models;

public partial class PurchaseDetail
{
    public int PurchaseDetailsId { get; set; }

    public int? PurchaseId { get; set; }

    public int? ProductId { get; set; }

    public int? Amount { get; set; }

    public virtual Product? Product { get; set; }

    public virtual Purchase? Purchase { get; set; }
}
