import { Rent } from "src/app/models/rent.model";

export class AppUser {
    Id: number;
    FullName : String;
    Email : String;
    //Birthday: DateTimeFormat;
    Activated:boolean;
    PersonalDocument:String;
    Renting:Rent[];

    constructor(Id: number,
        FullName : String,
        Email : String,
        //Birthday: DateTimeFormat,
        Activated:boolean,
        PersonalDocument:String,
        Renting:Rent[]) {
        
        this.Id=Id;
        this.FullName=FullName;
        this.Email=Email;
        //this.Birthday=Birthday;
        this.Activated=Activated;
        this.PersonalDocument=PersonalDocument;
        this.Renting=Renting;

    }
}