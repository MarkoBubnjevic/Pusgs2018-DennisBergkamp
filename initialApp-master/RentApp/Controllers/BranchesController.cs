using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using RentApp.Models.Entities;
using RentApp.Persistance;
using RentApp.Persistance.UnitOfWork.Interface;
using RentApp.Models;

namespace RentApp.Controllers
{
    public class BranchesController : ApiController
    {

        private readonly IUnitOfWork unitOfWork;

        public BranchesController(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        public IEnumerable<Branch> GetBranches()
        {
            return unitOfWork.Branches.GetAll();
        }

        [ResponseType(typeof(Branch))]
        public IHttpActionResult GetBranches(int id)
        {
            Branch branch = unitOfWork.Branches.Get(id);
            if (branch == null)
            {
                return NotFound();
            }

            return Ok(branch);
        }

        [ResponseType(typeof(void))]
        public IHttpActionResult PutBranch(int id, Branch branch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != branch.Id)
            {
                return BadRequest();
            }

            try
            {
                unitOfWork.Branches.Update(branch);
                unitOfWork.Complete();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BranchExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        [ResponseType(typeof(Branch))]
        public IHttpActionResult PostBranches(BranchBindingModel branch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Branch bra = new Branch()
            {
                Logo = branch.Logo,
                Longitude = branch.Longitude,
                Latitude = branch.Latitude,
                Address = branch.Address
            };

            var services = unitOfWork.Services.GetAll();

            Service item = new Service();

            foreach(var s in services)
            {
                if(branch.ServiceName == s.Name)
                {
                    item = s;
                }
            }

            item.Branches.Add(bra);


            unitOfWork.Branches.Add(bra);
            unitOfWork.Services.Update(item);

            unitOfWork.Complete();

            return CreatedAtRoute("DefaultApi", new { id = bra.Id }, bra);
        }

        [ResponseType(typeof(Branch))]
        public IHttpActionResult DeleteBranch(int id)
        {
            Branch branch = unitOfWork.Branches.Get(id);
            if (branch == null)
            {
                return NotFound();
            }

            unitOfWork.Branches.Remove(branch);
            unitOfWork.Complete();

            return Ok(branch);
        }

        private bool BranchExists(int id)
        {
            return unitOfWork.Branches.Get(id) != null;
        }
    }
}