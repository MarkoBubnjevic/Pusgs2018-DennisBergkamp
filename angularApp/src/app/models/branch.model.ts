export class Branch {
    Id: number;
    Logo : String;
    Latitude:number;
    Longitude:number;
    Address:string;  

    constructor(Id: number,
        Logo : String,
        Latitude:number,
        Longitude:number,
        Address:string) {
        this.Address=Address;
        this.Id=Id;
        this.Latitude=Latitude;
        this.Logo=Logo;
        this.Longitude=Longitude;

    }
}