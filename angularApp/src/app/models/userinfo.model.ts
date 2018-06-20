export class UserInfo{
    Email: string;
    HasRegistered:boolean;
    LoginProvider: string;

    constructor(Email: string, HasRegistered:boolean, LoginProvider:string){
        this.Email=Email;
        this.HasRegistered=HasRegistered;
        this.LoginProvider=LoginProvider;
    }

}