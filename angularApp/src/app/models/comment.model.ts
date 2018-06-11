import { AppUser } from "src/app/models/appuser.model";

export class Comment {
    Id: number;
    //DateTime : DateTimeFormat;
    TextComment:string;
    Author:AppUser;
     

    constructor( Id: number,
        //DateTime : DateTimeFormat,
        TextComment:string,
        Author:AppUser) {

        this.Id=Id;
        //this.DateTime=DateTime;
        this.TextComment=TextComment;
        this.Author=Author;

    }
}




