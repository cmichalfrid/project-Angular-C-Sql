using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal_Repository.ModelsConverters
{
    internal class ClientConverter
    {
        public ClientConverter() { }
        public static Dto_Common_Enteties.ClientDto ToClientDto(models.Client c)
        {
            Dto_Common_Enteties.ClientDto cd = new Dto_Common_Enteties.ClientDto();
           cd.BirthDay = c.BirthDay;
            cd.PhoneNumber = c.PhoneNumber;
            cd.Email = c.Email;
           cd.ClientName = c.ClientName;
           cd.ClientId = c.ClientId;
            return cd;
        }
         //public static List<Dto_Common_Enteties.ClientDto> ToProductDtoList(List<models.Client> cl)
         //{
         //    List<Dto_Common_Enteties.ClientDto> lc = new List<Dto_Common_Enteties.ClientDto>();
         //    foreach (var p in cl)
         //    {
         //        lc.Add(ToClientDto(cl));
         //    }
         //    return lc;
         //}
         public  static models.Client ToClientContext(Dto_Common_Enteties.ClientDto c)
        {
            models.Client d = new models.Client();
            d.BirthDay = c.BirthDay;
            d.PhoneNumber = c.PhoneNumber;
            d.Email = c.Email;
            d.ClientName = c.ClientName;
            d.ClientId = c.ClientId;
            return d;

        }
    }
}
