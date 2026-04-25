using Dal_Repository.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dto_Common_Enteties;
namespace Bll_Services
{
    public class ClientBll
    {
        public static async Task<Dto_Common_Enteties.ClientDto> SelectClientByPhoneNumber(string phoneNumber)
        {
            return await Dal_Repository.ClientDal.SelectClientByPhoneNumber(phoneNumber);

        }
        public static async Task PostClient(Dto_Common_Enteties.ClientDto c) { 

             Dal_Repository.ClientDal.PostClient(c);
        }
    }
}
