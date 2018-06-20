import { Component, OnInit } from '@angular/core';

import {ProfileService} from './profileService/profile.service';
import { Service } from 'src/app/models/service.model';
import { AppUser } from 'src/app/models/appuser.model';
import { EmailBM } from '../models/emailBM.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  appUser: AppUser;
  constructor(private profileService:ProfileService) { }

  ngOnInit() {
    this.callGet();
  }

  logOut(){
    localStorage.clear();
  }

  saveChanges(){
    this.profileService.putUser(this.appUser.Id,this.appUser)
    .subscribe(
      data => {
        alert("Changes successfully saved");
      },
      error => {
        console.log(error);
      })

  }

  callGet(){
    let username: string;
    username = localStorage.username;
    this.profileService.getUserFromUsername(username)
      .subscribe(
        data => {
          this.appUser = data;
        },
        error => {
          console.log(error);
        })
  }
}






