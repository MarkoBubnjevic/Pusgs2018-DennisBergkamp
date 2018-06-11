export class RegisterBinding{
    Email: string;
    Username: string;
    Date: string;
    Password: string;
    ConfirmPassword: string;
    

    constructor(email: string,
        username:string,
        date:string,
        password : string,
        confirmPassword:string) {
        this.Email=email;
        this.Password=password;
        this.ConfirmPassword=confirmPassword;
        this.Username=username;
        this.Date=date;

    }
}