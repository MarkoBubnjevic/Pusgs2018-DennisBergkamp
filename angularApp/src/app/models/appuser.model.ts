import { Rent } from "src/app/models/rent.model";

export class AppUser {
    Id: number;
    Deleted: boolean;
    FullName : String;
    Email : String;
    Birthday: Date;
    Activated:boolean;
    PersonalDocument:String;
    Renting:Rent[];

    constructor(Id: number,
        Deleted:boolean,
        FullName : String,
        Email : String,
        Birthday: Date,
        Activated:boolean,
        PersonalDocument:String,
        Renting:Rent[]) {
        
        this.Id=Id;
        this.Deleted = Deleted;
        this.FullName=FullName;
        this.Email=Email;
        this.Birthday=Birthday;
        this.Activated=Activated;
        this.PersonalDocument=PersonalDocument;
        this.Renting=Renting;

    }
}