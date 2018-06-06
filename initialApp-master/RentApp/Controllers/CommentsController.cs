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
    public class CommentsController : ApiController
    {

        private readonly IUnitOfWork unitOfWork;

        public CommentsController(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        public IEnumerable<Comment> GetComments()
        {
            return unitOfWork.Comments.GetAll();
        }

        [ResponseType(typeof(Comment))]
        public IHttpActionResult GetComments(int id)
        {
            Comment branch = unitOfWork.Comments.Get(id);
            if (branch == null)
            {
                return NotFound();
            }

            return Ok(branch);
        }

        [ResponseType(typeof(void))]
        public IHttpActionResult PutComment(int id, Comment branch)
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
                unitOfWork.Comments.Update(branch);
                unitOfWork.Complete();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CommentExists(id))
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
        public IHttpActionResult PostComments(Comment branch)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            unitOfWork.Comments.Add(branch);
            unitOfWork.Complete();

            return CreatedAtRoute("DefaultApi", new { id = branch.Id }, branch);
        }

        [ResponseType(typeof(Comment))]
        public IHttpActionResult DeleteComment(int id)
        {
            Comment branch = unitOfWork.Comments.Get(id);
            if (branch == null)
            {
                return NotFound();
            }

            unitOfWork.Comments.Remove(branch);
            unitOfWork.Complete();

            return Ok(branch);
        }

        private bool CommentExists(int id)
        {
            return unitOfWork.Branches.Get(id) != null;
        }
    }
}