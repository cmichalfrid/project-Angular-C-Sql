using System;
using System.Collections.Generic;

namespace Dal_Repository.models;

public partial class Company
{
    public string? CompanyName { get; set; }

    public int CompanyId { get; set; }

    public virtual ICollection<Product> Products { get; set; } = new List<Product>();
}
