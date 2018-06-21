import { Branch } from "src/app/models/branch.model";
import { Vehicle } from "src/app/models/vehicle.model";

export class Rent {
    Id: number;
    Deleted: boolean;
    Start : string;
    End: string;
    GetBranchId:number;
    RetBranchId:number;
    VehicleId:number;  
    GetBranch:Branch;
    RetBranch:Branch;
    Vehicle:Vehicle;  

    constructor( Id: number,
        Deleted: boolean,
        Start : string,
        End: string,
        GetBranchId:number,
        RetBranchId:number,
        VehicleId:number,
        GetBranch:Branch,
        RetBranch:Branch,
        Vehicle:Vehicle  ) {
        this.Id=Id;
        this.Deleted=Deleted;
        this.Start=Start;
        this.End=End;
        this.GetBranchId=GetBranchId;
        this.RetBranchId=RetBranchId;
        this.VehicleId=VehicleId;
        this.GetBranch=GetBranch;
        this.RetBranch=RetBranch;
        this.Vehicle=Vehicle;
    }
}