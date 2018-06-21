import { Component, OnInit } from '@angular/core';

import {ApproveService} from './approveService/approve.service';
import { Service } from 'src/app/models/service.model';
import { AppUser } from 'src/app/models/appuser.model';
import { Rent } from '../models/rent.model';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {

  users: AppUser[];
  services: Service[];
  rents: Rent[];

  constructor(private approveService: ApproveService) { }

  ngOnInit() {
      this.getUsers();
      this.getServices();
      this. getRents();
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

  getRents(){
    this.approveService.getAllRents()
      .subscribe(
        data => {
          this.rents = data;
        },
        error => {
          console.log(error);
        })
  }

  chechAvailableVehicle(i:number){
    return this.rents[i].Vehicle.Unvailable;
  }

  availableVehicle(id:number){
    this.approveService.availableVehicle(id)
      .subscribe(
        data => {
          alert("Vehicle available");
          this.getUsers();
        },
        error => {
          alert("Vehicle error!");
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

  chackRole(i){
    return this.users[i].Role == "Manager";
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

    blockService(id:number){

      this.approveService.blockSer(id)
          .subscribe(
            data => {
              alert("Service successfully bloc manager!");
              this.getServices();
            },
            error => {
              alert("Service error!");
              console.log(error);
            })
      }

}
