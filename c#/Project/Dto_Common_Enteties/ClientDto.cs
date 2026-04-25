using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto_Common_Enteties
{
    public  class ClientDto
    {
        public string? ClientName { get; set; }

        public int ClientId { get; set; }

        public string?  PhoneNumber { get; set; }

        public string? Email { get; set; }

        public DateOnly? BirthDay { get; set; }
       
    }
}
