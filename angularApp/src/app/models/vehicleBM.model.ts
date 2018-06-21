import { TypeOfVehicle } from "src/app/models/typeofvehicle.model";

export class VehicleBindingModel{
    Deleted: boolean;
    Model : String;
    Manufactor : String;
    Year:number;
    Description:string;  
    PricePerHour:number;   //nzm kako idu decimalni dal je samo obicno number il ne
    Unvailable:boolean;
    Images:string;
    Type:string;
    ServiceName: string;

    constructor(
        Deleted: boolean,
        Model : String,
        Manufactor : String,
        Year:number,
        Description:string,  
        PricePerHour:number,
        Unvailable:boolean,
        Images:string,
        Type:string,
        ServiceName:string) {
        
            this.Deleted=Deleted;
            this.Model=Model;
            this.Manufactor=Manufactor;
            this.Year=Year;
            this.Description=Description;
            this.PricePerHour=PricePerHour;
            this.Unvailable=Unvailable;
            this.Images=Images;
            this.Type=Type;
            this.ServiceName=ServiceName;
    }
}