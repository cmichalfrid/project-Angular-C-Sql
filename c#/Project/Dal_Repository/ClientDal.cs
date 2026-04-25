using Dal_Repository.models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal_Repository
{
    public class ClientDal
    {
        public static async Task<Dto_Common_Enteties.ClientDto> SelectClientByPhoneNumber(string checkNumber)
        {
            using (ToyStoreProjectContext db = new ToyStoreProjectContext())
            {
                var l = await db.Clients.ToListAsync();
                var q1 = l.FirstOrDefault(a => a.PhoneNumber == checkNumber);
                if (q1 == null)
                    return null;

                return ModelsConverters.ClientConverter.ToClientDto(q1);
            }
        }


            public static async Task PostClient(Dto_Common_Enteties.ClientDto c)
        {
            using (ToyStoreProjectContext db = new ToyStoreProjectContext()) { 
            var ac=db.Clients.Add(ModelsConverters.ClientConverter.ToClientContext(c));
                await db.SaveChangesAsync();
            }
        }

    }
}
