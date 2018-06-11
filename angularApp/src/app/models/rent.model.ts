import { Branch } from "src/app/models/branch.model";
import { Vehicle } from "src/app/models/vehicle.model";

export class Rent {
    Id: number;
    Start : DateTimeFormat;
    End: DateTimeFormat;
    Branch:Branch;
    Vehicle:Vehicle;  

    constructor( Id: number,
        Start : DateTimeFormat,
        End: DateTimeFormat,
        Branch:Branch,
        Vehicle:Vehicle  ) {
        this.Id=Id;
        this.Start=Start;
        this.End=End;
        this.Branch=Branch;
        this.Vehicle=Vehicle;
    }
}