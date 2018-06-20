import { Component, OnInit } from '@angular/core';

import {ApproveService} from './approveService/approve.service';
import { Service } from 'src/app/models/service.model';
import { AppUser } from 'src/app/models/appuser.model';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {

  users: AppUser[];
  services: Service[];

  constructor(private approveService: ApproveService) { }

  ngOnInit() {
      this.getUsers();
      this.getServices();
  }

  getUsers(){
    this.approveService.getAllUsers()
      .subscribe(
        data => {
          this.users = data;
        },
        error => {
          console.log(error);
        })
  }

  getServices(){
    this.approveService.getAllServices()
      .subscribe(
        data => {
          this.services = data;
        },
        error => {
          console.log(error);
        })
  }

  checkApprove(i:number){
    return this.users[i].Activated == false;
  }

  checkApproveSer(i:number){
    return this.services[i].Approved == false;
  }

  approve(id:number){

  this.approveService.approveUser(id)
      .subscribe(
        data => {
          alert("User successfully approved");
          this.getUsers();
        },
        error => {
          alert("Approve error!");
          console.log(error);
        })
  }

  approveSer(id:number){

    this.approveService.approveSer(id)
        .subscribe(
          data => {
            alert("Service successfully approved");
            this.getServices();
          },
          error => {
            alert("Service error!");
            console.log(error);
          })
    }

}
