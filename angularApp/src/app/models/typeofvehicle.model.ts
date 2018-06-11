import { Vehicle } from "src/app/models/vehicle.model";

export class TypeOfVehicle {
    Id: number;
    Name : String;
    Vehicles: Vehicle[];

    constructor( Id: number,
        Name : String,
        Vehicles: Vehicle[]) {
        this.Id=Id;
        this.Vehicles=Vehicles;
        this.Name=Name;

    }
}