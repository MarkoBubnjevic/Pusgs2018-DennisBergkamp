export class Branch {
    Id: number;
    Deleted: boolean;
    Logo : String;
    Latitude:number;
    Longitude:number;
    Address:string;
    ServiceName: string;  

    constructor(Id: number,
        Deleted: boolean,
        Logo : String,
        Latitude:number,
        Longitude:number,
        Address:string,
        ServiceName:string) {
        this.Address=Address;
        this.Deleted = Deleted;
        this.Id=Id;
        this.Latitude=Latitude;
        this.Logo=Logo;
        this.Longitude=Longitude;
        this.ServiceName=ServiceName;

    }
}