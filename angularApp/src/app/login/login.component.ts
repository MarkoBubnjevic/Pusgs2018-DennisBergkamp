import { Component, OnInit } from '@angular/core';
import { LoginService } from './loginService/login.service';
import { LogInModel } from 'src/app/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  callTokens(logInModel: LogInModel){
      this.loginService.getTheToken(logInModel);
  }
}
