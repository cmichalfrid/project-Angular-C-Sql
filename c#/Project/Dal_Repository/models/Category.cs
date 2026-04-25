using System;
using System.Collections.Generic;

namespace Dal_Repository.models;

public partial class Category
{
    public string? CategoryName { get; set; }

    public int CategoryId { get; set; }

    public virtual ICollection<Product> Products { get; set; } = new List<Product>();
}
