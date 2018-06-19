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
    public class VehiclesController : ApiController
    {
   


        private readonly IUnitOfWork unitOfWork;

        public VehiclesController(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        //[Authorize(Roles="Admin,Manager,AppUser,Client,NotAuthenticated")]
        //[AllowAnonymous]
        public IEnumerable<Vehicle> GetVehicles()
        {
            return unitOfWork.Vehicles.GetAll();
        }

        [ResponseType(typeof(Vehicle))]
        //[Authorize(Roles="Admin,Manager,AppUser,Client,NotAuthenticated")]
        //[AllowAnonymous]
        public IHttpActionResult GetVehicles(int id)
        {
            Vehicle rent = unitOfWork.Vehicles.Get(id);
            if (rent == null)
            {
                return NotFound();
            }

            return Ok(rent);
        }

        [ResponseType(typeof(void))]
        //[Authorize(Roles="Admin,Manager,AppUser,Client,NotAuthenticated")]
        //[AllowAnonymous]
        public IHttpActionResult PutVehicle(int id, Vehicle rent)
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
                unitOfWork.Vehicles.Update(rent);
                unitOfWork.Complete();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VehicleExists(id))
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

        [ResponseType(typeof(Vehicle))]
        //[Authorize(Roles="Admin,Manager,AppUser,Client,NotAuthenticated")]
        //[AllowAnonymous]
        public IHttpActionResult PostVehicles(Vehicle rent)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            unitOfWork.Vehicles.Add(rent);
            unitOfWork.Complete();

            return CreatedAtRoute("DefaultApi", new { id = rent.Id }, rent);
        }

        [ResponseType(typeof(Vehicle))]
        //[Authorize(Roles="Admin,Manager,AppUser,Client,NotAuthenticated")]
        //[AllowAnonymous]
        public IHttpActionResult DeleteVehicle(int id)
        {
            Vehicle rent = unitOfWork.Vehicles.Get(id);
            if (rent == null)
            {
                return NotFound();
            }

            rent.Deleted = true;

            unitOfWork.Vehicles.Update(rent);
            unitOfWork.Complete();

            return Ok(rent);
        }

        private bool VehicleExists(int id)
        {
            return unitOfWork.Vehicles.Get(id) != null;
        }
    }
}