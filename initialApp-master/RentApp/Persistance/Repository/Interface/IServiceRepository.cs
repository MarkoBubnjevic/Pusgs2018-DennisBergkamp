using RentApp.Models.Entities;
using RentApp.Persistance.Repository.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RentApp.Persistance.Repository
{
    public interface IServiceRepository : IRepository<Service, int>
    {
        IEnumerable<Service> GetAll(int pageIndex, int pageSize);
    }
}
