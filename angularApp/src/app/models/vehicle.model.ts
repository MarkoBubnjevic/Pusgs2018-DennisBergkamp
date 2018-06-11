import { TypeOfVehicle } from "src/app/models/typeofvehicle.model";

export class Vehicle {
    Id: number;
    Model : String;
    Manufactor : String;
    Year:number;
    Description:string;  
    PricePerHour:number;   //nzm kako idu decimalni dal je samo obicno number il ne
    Unavailable:boolean;
    Images:string[];
    Type:TypeOfVehicle[];

    constructor(Id: number,
        Model : String,
        Manufactor : String,
        Year:number,
        Description:string,  
        PricePerHour:number,
        Unavailable:boolean,
        Images:string[],
        Type:TypeOfVehicle[]) {
        
            this.Id=Id;
            this.Model=Model;
            this.Manufactor=Manufactor;
            this.Year=Year;
            this.Description=Description;
            this.PricePerHour=PricePerHour;
            this.Unavailable=Unavailable;
            this.Images=Images;
            this.Type=Type;

    }
}


