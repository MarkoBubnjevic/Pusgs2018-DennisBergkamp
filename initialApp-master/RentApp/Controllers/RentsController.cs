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

namespace RentApp.Controllers
{
    public class RentsController : ApiController
    {



        private readonly IUnitOfWork unitOfWork;

        public RentsController(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        //[Authorize(Roles="Admin,Manager,AppUser,Client,NotAuthenticated")]
        //[AllowAnonymous]
        public IEnumerable<Rent> GetRents()
        {
            return unitOfWork.Rents.GetAll();
        }

        [ResponseType(typeof(Rent))]
        //[Authorize(Roles="Admin,Manager,AppUser,Client,NotAuthenticated")]
        //[AllowAnonymous]
        public IHttpActionResult GetRents(int id)
        {
            Rent rent = unitOfWork.Rents.Get(id);
            if (rent == null)
            {
                return NotFound();
            }

            return Ok(rent);
        }

        [ResponseType(typeof(void))]
        //[Authorize(Roles="Admin,Manager,AppUser,Client,NotAuthenticated")]
        //[AllowAnonymous]
        public IHttpActionResult PutRent(int id, Rent rent)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != rent.Id)
            {
                return BadRequest();
            }

            try
            {
                unitOfWork.Rents.Update(rent);
                unitOfWork.Complete();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RentExists(id))
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

        [ResponseType(typeof(Rent))]
        //[Authorize(Roles="Admin,Manager,AppUser,Client,NotAuthenticated")]
        //[AllowAnonymous]
        public IHttpActionResult PostRents(Rent rent)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            unitOfWork.Rents.Add(rent);
            unitOfWork.Complete();

            return CreatedAtRoute("DefaultApi", new { id = rent.Id }, rent);
        }

        [ResponseType(typeof(Rent))]
        //[Authorize(Roles="Admin,Manager,AppUser,Client,NotAuthenticated")]
        //[AllowAnonymous]
        public IHttpActionResult DeleteRent(int id)
        {
            Rent rent = unitOfWork.Rents.Get(id);
            if (rent == null)
            {
                return NotFound();
            }

            rent.Deleted = true;
            unitOfWork.Rents.Update(rent);
            unitOfWork.Complete();

            return Ok(rent);
        }

        private bool RentExists(int id)
        {
            return unitOfWork.Rents.Get(id) != null;
        }
    }
}