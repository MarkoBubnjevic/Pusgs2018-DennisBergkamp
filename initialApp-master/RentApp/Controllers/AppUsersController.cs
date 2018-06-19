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
    public class AppUsersController : ApiController
    {

        private readonly IUnitOfWork unitOfWork;

        public AppUsersController(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        //GET: api/AppUsers
        //[Authorize(Roles="Admin,Manager,AppUser,Client,NotAuthenticated")]
        //[AllowAnonymous]
        public IEnumerable<AppUser> GetAppUsers()
        {
            return unitOfWork.AppUsers.GetAll();
        }

        //GET: api/AppUsers/5
        [ResponseType(typeof(AppUser))]
        //[Authorize(Roles="Admin,Manager,AppUser,Client,NotAuthenticated")]
        //[AllowAnonymous]
        public IHttpActionResult GetAppUser(int id)
        {
            AppUser service = unitOfWork.AppUsers.Get(id);
            if (service == null)
            {
                return NotFound();
            }

            return Ok(service);
        }

        //PUT: api/AppUsers/5
        [ResponseType(typeof(void))]
        //[Authorize(Roles="Admin,Manager,AppUser,Client,NotAuthenticated")]
        //[AllowAnonymous]
        public IHttpActionResult PutAppUser(int id, AppUser appUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != appUser.Id)
            {
                return BadRequest();
            }

            try
            {
                unitOfWork.AppUsers.Update(appUser);
                unitOfWork.Complete();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AppUserExists(id))
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


        //POST: api/AppUsers
        [ResponseType(typeof(AppUser))]
        //[Authorize(Roles="Admin,Manager,AppUser,Client,NotAuthenticated")]
        //[AllowAnonymous]
        public IHttpActionResult PostAppUser(AppUser appUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            unitOfWork.AppUsers.Add(appUser);
            unitOfWork.Complete();

            return CreatedAtRoute("DefaultApi", new { id = appUser.Id }, appUser);
        }


        //DELETE: api/AppUsers/5
        [ResponseType(typeof(AppUser))]
        //[Authorize(Roles="Admin,Manager,AppUser,Client,NotAuthenticated")]
        //[AllowAnonymous]
        public IHttpActionResult DeleteAppUser(int id)
        {
            AppUser appUser = unitOfWork.AppUsers.Get(id);
            if (appUser == null)
            {
                return NotFound();
            }

            appUser.Deleted = true;
            unitOfWork.AppUsers.Update( appUser);
            unitOfWork.Complete();

            return Ok(appUser);
        }

        private bool AppUserExists(int id)
        {
            return unitOfWork.AppUsers.Get(id) != null;
        }
    }
}