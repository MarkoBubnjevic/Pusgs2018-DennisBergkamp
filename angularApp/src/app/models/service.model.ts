import { Vehicle } from "src/app/models/vehicle.model";
import { Branch } from "src/app/models/branch.model";
import { Comment } from "src/app/models/comment.model";

export class Service {
    Id: number;
    Deleted: boolean;
    Approved:boolean;
    Name:string;
    Logo : String;
    Email:String;
    Description:String;
    AverageGrade:number;
    NumberOfGrades:number;
    Vehicles:Vehicle[];
    Branches:Branch[];
    Comments:Comment[];

    constructor(Id: number,
        Deleted: boolean,
        Approved: boolean,
        Name:string,
        Logo : String,
        Email:String,
        Description:String,
        AverageGrade:number,
        NumberOfGrades:number,
        Vehicles:Vehicle[],
        Branches:Branch[],
        Comments:Comment[]) {
       
        this.Id=Id;
        this.Deleted=Deleted;
        this.Approved=Approved;
        this.Name=Name;
        this.Logo=Logo;
        this.Email=Email;
        this.Description=Description;
        this.AverageGrade=AverageGrade;
        this.NumberOfGrades=NumberOfGrades;
        this.Vehicles=Vehicles;
        this.Branches=Branches;
        this.Comments=Comments;

    }
}

