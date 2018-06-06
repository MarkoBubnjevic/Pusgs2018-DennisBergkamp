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
            Branch branch1 = new Branch() { Address = "Bulevar Oslobodjenja 123", Latitude = 22.22, Longitude = 44.44, Logo = "prva putanja do slike" };
            Branch branch2 = new Branch() { Address = "Bulevar Kralja Petra 45", Latitude = 11.32, Longitude = 53.44, Logo = "druga putanja do slike" };
            Branch branch3 = new Branch() { Address = "Bulevar Cara Lazara 42", Latitude = 31.33, Longitude = 25.77, Logo = "treca putanja do slike" };

            TypeOfVehicle tov1 = new TypeOfVehicle() { Name = "BMW", Vehicles = new List<Vehicle>() };
            TypeOfVehicle tov2 = new TypeOfVehicle() { Name = "Audi", Vehicles = new List<Vehicle>() };
            TypeOfVehicle tov3 = new TypeOfVehicle() { Name = "Fiat", Vehicles = new List<Vehicle>() };

            Vehicle vehicle1 = new Vehicle() { Model = "X5", Manufactor = "Fabrika BMW", Year = 2015, Description = "Opis BMW", PricePerHour = 50, Unvailable = true, Images = new List<string>() { "prva slika BMW", "druga slika BMW" }, Type = tov1 };
            Vehicle vehicle2 = new Vehicle() { Model = "R8", Manufactor = "Fabrika Audi", Year = 2014, Description = "Opis Audi", PricePerHour = 70, Unvailable = false, Images = new List<string>() { "prva slika Audi", "druga slika Audi" }, Type = tov2 };
            Vehicle vehicle3 = new Vehicle() { Model = "Panda", Manufactor = "Fabrika Fiat", Year = 2010, Description = "Opis Fiat", PricePerHour = 30, Unvailable = true, Images = new List<string>() { "prva slika Fiat", "druga slika Fiat" }, Type = tov3 };

            Rent rent1 = new Rent() { Start = DateTime.Now, End = DateTime.Now, Branch = branch1, Vehicle = vehicle1 };
            Rent rent2 = new Rent() { Start = DateTime.Now, End = DateTime.Now, Branch = branch2, Vehicle = vehicle2 };
            Rent rent3 = new Rent() { Start = DateTime.Now, End = DateTime.Now, Branch = branch3, Vehicle = vehicle3 };

            AppUser user1 = new AppUser() { FullName = "Marko Markovic", Email = "markomarkovic@gmail.com", Birthday = DateTime.Now, Activated = false, PersonalDocument = "putanja do slike", Renting = new List<Rent>() { rent1 } };
            AppUser user2 = new AppUser() { FullName = "Jovan Jovanovic", Email = "jovanjovanovic@gmail.com", Birthday = DateTime.Now, Activated = true, PersonalDocument = "putanja do slike", Renting = new List<Rent>() { rent2 } };
            AppUser user3 = new AppUser() { FullName = "Ilija Ilic", Email = "ilijailic@gmail.com", Birthday = DateTime.Now, Activated = false, PersonalDocument = "putanja do slike", Renting = new List<Rent>() { rent3 } };

            Comment com1 = new Comment() { DateTime = DateTime.Now, Text = "neki tekst komentara", Author = user1 };
            Comment com2 = new Comment() { DateTime = DateTime.Now, Text = "jos neki tekst komentara", Author = user2 };
            Comment com3 = new Comment() { DateTime = DateTime.Now, Text = "jos malo teksta", Author = user3 };

            Service service1 = new Service() { Name = "Prvi servis", Logo = "putanja do slike", Email = "servis1@gmail.com", Description = "opis prvog servisa", AverageGrade = 8, NumberOfGrades = 2, Vehicles = new List<Vehicle>() { vehicle1 }, Branches = new List<Branch>() { branch1 }, Comments = new List<Comment>() { com1 } };
            Service service2 = new Service() { Name = "Drugi servis", Logo = "putanja do slike", Email = "servis2@gmail.com", Description = "opis drugog servisa", AverageGrade = 6, NumberOfGrades = 4, Vehicles = new List<Vehicle>() { vehicle2 }, Branches = new List<Branch>() { branch2 }, Comments = new List<Comment>() { com2 } };
            Service service3 = new Service() { Name = "Treci servis", Logo = "putanja do slike", Email = "servis3@gmail.com", Description = "opis treceg servisa", AverageGrade = 9, NumberOfGrades = 3, Vehicles = new List<Vehicle>() { vehicle3 }, Branches = new List<Branch>() { branch3 }, Comments = new List<Comment>() { com3 } };

            context.Branches.AddOrUpdate(branch1);
            context.Branches.AddOrUpdate(branch2);
            context.Branches.AddOrUpdate(branch3);

            context.Types.AddOrUpdate(tov1);
            context.Types.AddOrUpdate(tov1);
            context.Types.AddOrUpdate(tov1);

            context.Vechiles.AddOrUpdate(vehicle1);
            context.Vechiles.AddOrUpdate(vehicle2);
            context.Vechiles.AddOrUpdate(vehicle3);

            context.Rents.AddOrUpdate(rent1);
            context.Rents.AddOrUpdate(rent2);
            context.Rents.AddOrUpdate(rent3);

            context.AppUsers.AddOrUpdate(user1);
            context.AppUsers.AddOrUpdate(user2);
            context.AppUsers.AddOrUpdate(user3);

            context.Comments.AddOrUpdate(com1);
            context.Comments.AddOrUpdate(com2);
            context.Comments.AddOrUpdate(com3);

            context.Services.AddOrUpdate(service1);
            context.Services.AddOrUpdate(service2);
            context.Services.AddOrUpdate(service3);


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

            context.AppUsers.AddOrUpdate(

                  u => u.FullName,

                  new AppUser() { FullName = "Admin Adminovic",Email="admindaminovic@gmail.com",Birthday=DateTime.Now,Activated=true,PersonalDocument="putanja do slike",Renting=new List<Rent>() { rent1} }

            );

            context.AppUsers.AddOrUpdate(

                p => p.FullName,

                new AppUser() { FullName = "AppUser AppUserovic", Email = "appuserappuserovic@gmail.com", Birthday = DateTime.Now, Activated = true, PersonalDocument = "putanja do slike", Renting = new List<Rent>() { rent2 } }

            );

           
            var userStore = new UserStore<RAIdentityUser>(context);
            var userManager = new UserManager<RAIdentityUser>(userStore);

            if (!context.Users.Any(u => u.UserName == "admin"))
            {
                var _appUser = context.AppUsers.FirstOrDefault(a => a.FullName == "Admin Adminovic");
                var user = new RAIdentityUser() { Id = "admin", UserName = "admin", Email = "admin@yahoo.com", PasswordHash = RAIdentityUser.HashPassword("admin"), AppUserId = _appUser.Id };
                userManager.Create(user);
                userManager.AddToRole(user.Id, "Admin");
            }

            if (!context.Users.Any(u => u.UserName == "appu"))

            {

                var _appUser = context.AppUsers.FirstOrDefault(a => a.FullName == "AppUser AppUserovic");
                var user = new RAIdentityUser() { Id = "appu", UserName = "appu", Email = "appu@yahoo.com", PasswordHash = RAIdentityUser.HashPassword("appu"), AppUserId = _appUser.Id };
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
