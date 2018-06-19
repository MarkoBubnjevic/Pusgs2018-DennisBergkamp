import { text } from "@angular/core/src/render3/instructions";

export class CommentBindingModel {
    Text:string;
    ServiceName:string;
     

    constructor( 
        Text:string,
        ServiceName:string) {

        this.Text=Text;
        this.ServiceName=ServiceName;
    

    }
}
