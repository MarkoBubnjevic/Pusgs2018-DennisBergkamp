import { Component, OnInit } from '@angular/core';

import { Rent } from '../models/rent.model';
import { Vehicle } from '../models/vehicle.model';
import { AppUser } from '../models/appUser.model';
import { Branch } from '../models/branch.model';
import { DateModel } from '../models/date.model';

import {RentService} from './rentService/rent.service';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {

  vehicles: Vehicle[];
  branches: Branch[];
  appUser: AppUser;
  rentVehicle: Vehicle;
  rentbranch: Branch;
  rent: Rent;

  constructor(private rentService: RentService) { }

  ngOnInit() {
    this.getAllVehicles();
    this.getAllBranches();
  }

  getAllVehicles(){
    this.rentService.getAllVehicles()
    .subscribe(
      data => {
        this.vehicles = data;
      },
      error => {
        console.log(error);
      })
  }

  getAllBranches(){
    this.rentService.getAllBranches()
    .subscribe(
      data => {
        this.branches = data;
      },
      error => {
        console.log(error);
      })
  }

  checkAvailable(i){
    return this.vehicles[i].Unvailable == false;
  }

  addVehicle(i){
    this.rentVehicle = this.vehicles[i];
     alert("Vehicle added "+this.rentVehicle.Model)
  }

  addBranch(i){
   this.rentbranch = this.branches[i];
   alert("Branch added "+this.rentbranch.Address)
  }

  finishRent(date: DateModel){

    this.rent = new Rent(undefined,date.StartDate,date.EndDate, this.rentbranch, this.rentVehicle);

    this.rentService.postRent(this.rent)
    .subscribe(
      data => {
        alert("Rent successfully added!");
      },
      error => {
        alert("Rent error!");
      })

  }
}
