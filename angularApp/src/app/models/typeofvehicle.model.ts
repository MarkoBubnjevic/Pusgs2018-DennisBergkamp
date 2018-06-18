import { Vehicle } from "src/app/models/vehicle.model";

export class TypeOfVehicle {
    Id: number;
    Deleted: boolean;
    Name : String;
    Vehicles: Vehicle[];

    constructor( Id: number,
        Deleted: boolean,
        Name : String,
        Vehicles: Vehicle[]) {
        this.Id=Id;
        this.Deleted;
        this.Vehicles=Vehicles;
        this.Name=Name;

    }
}