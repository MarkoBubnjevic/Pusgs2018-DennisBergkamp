import { Component, OnInit } from '@angular/core';

import {ProfileService} from './profileService/profile.service';
import { Service } from 'src/app/models/service.model';
import { AppUser } from 'src/app/models/appuser.model';
import { EmailBM } from '../models/emailBM.model';

import {FileUploader,FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { FinishProfile } from '../models/finishProfile.model';
import { Router } from '@angular/router';

const URL = 'http://localhost:51680/api/Upload/user/PostUserImage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  appUser: AppUser;

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  url: string;


  constructor(private profileService:ProfileService, private router: Router) {
    this.uploader.onAfterAddingFile = (file) => {file.withCredentials = false;};
    this.uploader.onCompleteItem = (item: any, response: any,status: any, headers: any) => {
        this.url=JSON.parse(response);        
    };
   }

   uploadFile: any;

  ngOnInit() {
    this.callGet();
  }

  handleUpload(data): void{
    if(data && data.response){
      data = JSON.parse(data.response);
      this.uploadFile = data;
    }
  }


  logOut(){
    localStorage.clear();
    this.router.navigate(['login']);
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
  finishProfile(){
    let profileBM: FinishProfile;
    profileBM = new FinishProfile(this.url);

    this.profileService.finishProfile(this.appUser.Id,profileBM)
      .subscribe(
        data => {
          alert("Profile finished. Wait for approval!");
        },
        error => {
          alert("Finish error!");
        })

  }
}






