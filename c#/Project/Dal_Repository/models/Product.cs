using System;
using System.Collections.Generic;

namespace Dal_Repository.models;

public partial class Product
{
    public string? ProductName { get; set; }

    public int ProductId { get; set; }

    public int? TargetAge { get; set; }

    public int? CategoryId { get; set; }

    public int? CompanyId { get; set; }

    public string? Picture { get; set; }

    public string? ProductDes { get; set; }

    public int? Price { get; set; }

    public DateOnly? LastUpdate { get; set; }

    public virtual Category? Category { get; set; }

    public virtual Company? Company { get; set; }

    public virtual ICollection<PurchaseDetail> PurchaseDetails { get; set; } = new List<PurchaseDetail>();
}
