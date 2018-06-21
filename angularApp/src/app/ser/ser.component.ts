import { Component, OnInit } from '@angular/core';

import {SerService} from './serService/ser.service';
import { Service } from 'src/app/models/service.model';

import {FileUploader,FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

const URL = 'http://localhost:51680/api/Upload/user/PostBranchImage';

@Component({
  selector: 'app-ser',
  templateUrl: './ser.component.html',
  styleUrls: ['./ser.component.css']
})
export class SerComponent implements OnInit {

  services: Service[];

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  url: string;

  constructor(private serService: SerService) {
    this.uploader.onAfterAddingFile = (file) => {file.withCredentials = false;};
    this.uploader.onCompleteItem = (item: any, response: any,status: any, headers: any) => {
        this.url=JSON.parse(response);        
    };
   }

  ngOnInit() {
    this.callGet();
  }

  uploadFile: any;

  handleUpload(data): void{
    if(data && data.response){
      data = JSON.parse(data.response);
      this.uploadFile = data;
    }
  }

  checkUsername(i:number)
  {
    return this.services[i].CreatorUserName == localStorage.username;
  }

  checkUserType()
  {
    return localStorage.role == 'Admin' || localStorage.role == 'Manager';
  }

  callGet(){
    this.serService.getAllServices()
      .subscribe(
        data => {
          this.services = data;
        },
        error => {
          console.log(error);
        })
  }

  addService(service: Service){
    service.Logo=this.url;
    service.CreatorUserName = localStorage.username;
    this.serService.postService(service)
    .subscribe(
      data => {
        alert("Service successfully added!");
        this.callGet();
      },
      error => {
        alert("Service error!");
      })
  }

  checkRole(){
    return localStorage.role == "Admin";
  }

  chechServiceApprove(i:number){
    return this.services[i].Approved;
  }


  deleteService(id: number){
    this.serService.deleteService(id)
    .subscribe(
      data => {
        alert("Service successfully deleted!");
        this.callGet();
      },
      error => {
        alert("Service delete error!");
      })
  }

  saveService(i) {
    debugger
    this.serService.updateService(this.services[i].Id,this.services[i])
    .subscribe(
      data => {
        alert("Service successfully updated!");
        this.callGet();
      },
      error => {
        alert("Service update error!");
      })
  }
}
