namespace RentApp.Migrations
{
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using RentApp.Models.Entities;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Data.Entity.Validation;
    using System.Linq;
    using System.Text;

    internal sealed class Configuration : DbMigrationsConfiguration<RentApp.Persistance.RADBContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(RentApp.Persistance.RADBContext context)
        {
            Branch branch1 = new Branch() { Deleted = false, Address = "Valentina vodnika 18", Latitude = 45.256400, Longitude = 19.836926, Logo = "prva putanja do slike" };
            Branch branch2 = new Branch() { Deleted = false, Address = "Bulevar Narodnog Fronta 23", Latitude = 45.239722, Longitude = 19.836132, Logo = "druga putanja do slike" };
            Branch branch3 = new Branch() { Deleted = false, Address = "Prizrenska 20", Latitude = 45.284714, Longitude = 19.838642, Logo = "treca putanja do slike" };

            context.Branches.AddOrUpdate(a => a.Id, branch1);
            context.Branches.AddOrUpdate(a => a.Id, branch2);
            context.Branches.AddOrUpdate(a => a.Id, branch3);

            SaveChanges(context);

            TypeOfVehicle tov1 = new TypeOfVehicle() { Deleted = false, Name = "Karavan", Vehicles = new List<Vehicle>() };
            TypeOfVehicle tov2 = new TypeOfVehicle() { Deleted = false, Name = "Terenac", Vehicles = new List<Vehicle>() };
            TypeOfVehicle tov3 = new TypeOfVehicle() { Deleted = false, Name = "Gradski auto", Vehicles = new List<Vehicle>() };

            context.Types.AddOrUpdate(a => a.Id, tov1);
            context.Types.AddOrUpdate(a => a.Id, tov2);
            context.Types.AddOrUpdate(a => a.Id, tov3);

            SaveChanges(context);

            Vehicle vehicle1 = new Vehicle() { Deleted = false, Model = "X5", Manufactor = "Fabrika BMW", Year = 2015, Description = "Opis BMW", PricePerHour = 50, Unvailable = true, Images = new List<string>() { "prva slika BMW", "druga slika BMW" }, Type = context.Types.Find(1) };
            Vehicle vehicle2 = new Vehicle() { Deleted = false, Model = "R8", Manufactor = "Fabrika Audi", Year = 2014, Description = "Opis Audi", PricePerHour = 70, Unvailable = false, Images = new List<string>() { "prva slika Audi", "druga slika Audi" }, Type = context.Types.Find(2) };
            Vehicle vehicle3 = new Vehicle() { Deleted = false, Model = "Panda", Manufactor = "Fabrika Fiat", Year = 2010, Description = "Opis Fiat", PricePerHour = 30, Unvailable = true, Images = new List<string>() { "prva slika Fiat", "druga slika Fiat" }, Type = context.Types.Find(3) };

            context.Vechiles.AddOrUpdate(a => a.Id, vehicle1);
            context.Vechiles.AddOrUpdate(a => a.Id, vehicle2);
            context.Vechiles.AddOrUpdate(a => a.Id, vehicle3);

            SaveChanges(context);

            Rent rent1 = new Rent() { Deleted = false, Start = DateTime.Now, End = DateTime.Now, Branch = context.Branches.Find(1), Vehicle = context.Vechiles.Find(1) };
            Rent rent2 = new Rent() { Deleted = false, Start = DateTime.Now, End = DateTime.Now, Branch = context.Branches.Find(2), Vehicle = context.Vechiles.Find(2) };
            Rent rent3 = new Rent() { Deleted = false, Start = DateTime.Now, End = DateTime.Now, Branch = context.Branches.Find(3), Vehicle = context.Vechiles.Find(3) };

            context.Rents.AddOrUpdate(a => a.Id, rent1);
            context.Rents.AddOrUpdate(a => a.Id, rent2);
            context.Rents.AddOrUpdate(a => a.Id, rent3);

            SaveChanges(context);


            AppUser user1 = new AppUser() { Deleted = false, Email = "marko@gmail.com", Role = "", FullName = "Marko Markovic", Birthday = DateTime.Now, Activated = false, PersonalDocument = "putanja do slike", Renting = new List<Rent>() { context.Rents.Find(1) } };
            AppUser user2 = new AppUser() { Deleted = false, Email = "jovan@gmail.com", Role = "", FullName = "Jovan Jovanovic", Birthday = DateTime.Now, Activated = true, PersonalDocument = "putanja do slike", Renting = new List<Rent>() { context.Rents.Find(2) } };
            AppUser user3 = new AppUser() { Deleted = false, Email = "ilija@gmail.com", Role = "", FullName = "Ilija Ilic", Birthday = DateTime.Now, Activated = false, PersonalDocument = "putanja do slike", Renting = new List<Rent>() { context.Rents.Find(3) } };

            context.AppUsers.AddOrUpdate(a => a.Id, user1);
            context.AppUsers.AddOrUpdate(a => a.Id, user2);
            context.AppUsers.AddOrUpdate(a => a.Id, user3);

            SaveChanges(context);

            Comment com1 = new Comment() { Deleted = false, DateTime = DateTime.Now, Text = "neki tekst komentara", Author = context.AppUsers.Find(1) };
            Comment com2 = new Comment() { Deleted = false, DateTime = DateTime.Now, Text = "jos neki tekst komentara", Author = context.AppUsers.Find(2) };
            Comment com3 = new Comment() { Deleted = false, DateTime = DateTime.Now, Text = "jos malo teksta", Author = context.AppUsers.Find(3) };

            context.Comments.AddOrUpdate(a => a.Id, com1);
            context.Comments.AddOrUpdate(a => a.Id, com2);
            context.Comments.AddOrUpdate(a => a.Id, com3);

            SaveChanges(context);


            Service service1 = new Service() { Deleted = false, Approved = true, Name = "Prvi servis", Logo = "putanja do slike", Email = "servis1@gmail.com", Description = "opis prvog servisa", AverageGrade = 8, NumberOfGrades = 2, Vehicles = new List<Vehicle>() { context.Vechiles.Find(1) }, Branches = new List<Branch>() { context.Branches.Find(1) }, Comments = new List<Comment>() { context.Comments.Find(1) } };
            Service service2 = new Service() { Deleted = false, Approved = true, Name = "Drugi servis", Logo = "putanja do slike", Email = "servis2@gmail.com", Description = "opis drugog servisa", AverageGrade = 6, NumberOfGrades = 4, Vehicles = new List<Vehicle>() { context.Vechiles.Find(2) }, Branches = new List<Branch>() { context.Branches.Find(2) }, Comments = new List<Comment>() { context.Comments.Find(2) } };
            Service service3 = new Service() { Deleted = false, Approved = false, Name = "Treci servis", Logo = "putanja do slike", Email = "servis3@gmail.com", Description = "opis treceg servisa", AverageGrade = 9, NumberOfGrades = 3, Vehicles = new List<Vehicle>() { context.Vechiles.Find(3) }, Branches = new List<Branch>() { context.Branches.Find(3) }, Comments = new List<Comment>() { context.Comments.Find(3) } };

            context.Services.AddOrUpdate(a => a.Id, service1);
            context.Services.AddOrUpdate(a => a.Id, service2);
            context.Services.AddOrUpdate(a => a.Id, service3);

            SaveChanges(context);


            if (!context.Roles.Any(r => r.Name == "Admin"))
            {
                var store = new RoleStore<IdentityRole>(context);
                var manager = new RoleManager<IdentityRole>(store);
                var role = new IdentityRole { Name = "Admin" };

                manager.Create(role);
            }

            if (!context.Roles.Any(r => r.Name == "Manager"))
            {
                var store = new RoleStore<IdentityRole>(context);
                var manager = new RoleManager<IdentityRole>(store);
                var role = new IdentityRole { Name = "Manager" };

                manager.Create(role);
            }

            if (!context.Roles.Any(r => r.Name == "AppUser"))
            {
                var store = new RoleStore<IdentityRole>(context);
                var manager = new RoleManager<IdentityRole>(store);
                var role = new IdentityRole { Name = "AppUser" };

                manager.Create(role);
            }
            if (!context.Roles.Any(r => r.Name == "NotAuthenticated"))
            {
                var store = new RoleStore<IdentityRole>(context);
                var manager = new RoleManager<IdentityRole>(store);
                var role = new IdentityRole { Name = "NotAuthenticated" };

                manager.Create(role);
            }

            context.AppUsers.AddOrUpdate(

                  u => u.FullName,

                  new AppUser() { Deleted = false, FullName = "Admin Adminovic", Birthday=DateTime.Now,Activated=true,PersonalDocument="putanja do slike",Renting=new List<Rent>() { rent1} }

            );

            context.AppUsers.AddOrUpdate(

                p => p.FullName,

                new AppUser() { Deleted = false, FullName = "AppUser AppUserovic", Birthday = DateTime.Now, Activated = true, PersonalDocument = "putanja do slike", Renting = new List<Rent>() { rent2 } }

            );

            SaveChanges(context);

            var userStore = new UserStore<RAIdentityUser>(context);
            var userManager = new UserManager<RAIdentityUser>(userStore);

            if (!context.Users.Any(u => u.UserName == "admin"))
            {
                var _appUser = context.AppUsers.FirstOrDefault(a => a.FullName == "Admin Adminovic");
                _appUser.Role = "Admin";
                _appUser.Username = "admin";
                var user = new RAIdentityUser() { Id = "admin", UserName = "admin", Email = "admin@yahoo.com", PasswordHash = RAIdentityUser.HashPassword("admin"), AppUserId = _appUser.Id, AppUser = _appUser };
                userManager.Create(user);
                userManager.AddToRole(user.Id, "Admin");
            }

            if (!context.Users.Any(u => u.UserName == "appu"))

            {

                var _appUser = context.AppUsers.FirstOrDefault(a => a.FullName == "AppUser AppUserovic");
                _appUser.Role = "AppUser";
                _appUser.Username = "appu";
                var user = new RAIdentityUser() { Id = "appu", UserName = "appu", Email = "appu@yahoo.com", PasswordHash = RAIdentityUser.HashPassword("appu"), AppUserId = _appUser.Id, AppUser = _appUser };
                userManager.Create(user);
                userManager.AddToRole(user.Id, "AppUser");

            }


            if (!context.Users.Any(u => u.UserName == "marko"))

            {

                var _appUser = context.AppUsers.FirstOrDefault(a => a.FullName == "Marko Markovic");
                _appUser.Role = "Manager";
                _appUser.Username = "marko";
                var user = new RAIdentityUser() { Id = "marko", UserName = "marko", Email = _appUser.Email, PasswordHash = RAIdentityUser.HashPassword("marko"), AppUserId = _appUser.Id, AppUser = _appUser };
                userManager.Create(user);
                userManager.AddToRole(user.Id, "Manager");

            }

            if (!context.Users.Any(u => u.UserName == "jovan"))

            {

                var _appUser = context.AppUsers.FirstOrDefault(a => a.FullName == "Jovan Jovanovic");
                _appUser.Role = "NotAuthenticated";
                _appUser.Username = "jovan";
                var user = new RAIdentityUser() { Id = "jovan", UserName = "jovan", Email = _appUser.Email, PasswordHash = RAIdentityUser.HashPassword("jovan"), AppUserId = _appUser.Id, AppUser = _appUser };
                userManager.Create(user);
                userManager.AddToRole(user.Id, "NotAuthenticated");

            }

            if (!context.Users.Any(u => u.UserName == "ilija"))

            {

                var _appUser = context.AppUsers.FirstOrDefault(a => a.FullName == "Ilija Ilic");
                _appUser.Role = "AppUser";
                _appUser.Username = "ilija";
                var user = new RAIdentityUser() { Id = "ilija", UserName = "ilija", Email = _appUser.Email, PasswordHash = RAIdentityUser.HashPassword("ilija"), AppUserId = _appUser.Id, AppUser = _appUser };
                userManager.Create(user);
                userManager.AddToRole(user.Id, "AppUser");

            }

            SaveChanges(context);

        }

        private static void SaveChanges(DbContext context)
        {
            try
            {
                context.SaveChanges();
            }
            catch (DbEntityValidationException ex)
            {
                var sb = new StringBuilder();
                foreach (var failure in ex.EntityValidationErrors)
                {
                    sb.AppendFormat("{0} failed validation\n", failure.Entry.Entity.GetType());
                    foreach (var error in failure.ValidationErrors)
                    {
                        sb.AppendFormat("- {0} : {1}", error.PropertyName, error.ErrorMessage);
                        sb.AppendLine();
                    }
                }
                throw new DbEntityValidationException(
                    "Entity Validation Failed - errors follow:\n" +
                    sb.ToString(), ex
                );
            }
        }
    }
}
