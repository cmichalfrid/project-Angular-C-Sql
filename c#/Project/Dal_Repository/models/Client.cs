using System;
using System.Collections.Generic;

namespace Dal_Repository.models;

public class Client
{
    public string? ClientName { get; set; }

    public int ClientId { get; set; }

    public string? PhoneNumber { get; set; }

    public string? Email { get; set; }

    public DateOnly? BirthDay { get; set; }

    public virtual ICollection<Purchase> Purchases { get; set; } = new List<Purchase>();

}
