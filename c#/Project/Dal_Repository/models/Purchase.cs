using System;
using System.Collections.Generic;

namespace Dal_Repository.models;

public partial class Purchase
{
    public int PurchaseId { get; set; }

    public int? ClientId { get; set; }

    public DateOnly? PurchaseDate { get; set; }

    public string? Note { get; set; }

    public int? AmountToBePaid { get; set; }

    public virtual Client? Client { get; set; }

    public virtual ICollection<PurchaseDetail> PurchaseDetails { get; set; } = new List<PurchaseDetail>();
}
