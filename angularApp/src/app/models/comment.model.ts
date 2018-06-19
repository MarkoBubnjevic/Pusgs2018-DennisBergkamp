import { AppUser } from "src/app/models/appuser.model";

export class Comment {
    Id: number;
    Deleted: boolean;
    DateTime : Date;
    Text:string;
    Author:AppUser;
     

    constructor( Id: number,
        Deleted: boolean,
        DateTime : Date,
        TextCom:string,
        Author:AppUser) {

        this.Id=Id;
        this.Deleted=Deleted;
        this.DateTime=DateTime;
        this.Text=TextCom;
        this.Author=Author;

    }
}




