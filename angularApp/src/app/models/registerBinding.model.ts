export class RegisterBinding{
    FullName: string;
    Email: string;
    Username: string;
    Date: string;
    Password: string;
    ConfirmPassword: string;
    

    constructor(fullname: string,
        email: string,
        username:string,
        date:string,
        password : string,
        confirmPassword:string) {
        this.FullName = fullname;
        this.Email=email;
        this.Password=password;
        this.ConfirmPassword=confirmPassword;
        this.Username=username;
        this.Date=date;

    }
}