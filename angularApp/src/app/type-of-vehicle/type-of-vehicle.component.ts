import { Component, OnInit } from '@angular/core';

import {TypeOfVehicleService} from './typeOfVehicleService/type-of-vehicle.service';
import { TypeOfVehicle } from 'src/app/models/typeofvehicle.model';

@Component({
  selector: 'app-type-of-vehicle',
  templateUrl: './type-of-vehicle.component.html',
  styleUrls: ['./type-of-vehicle.component.css']
})
export class TypeOfVehicleComponent implements OnInit {


  types: TypeOfVehicle[];

  constructor(private typeService: TypeOfVehicleService) { }

  ngOnInit() {
    this.getTypes();
  }

  getTypes(){
    this.typeService.getAllTypes()
      .subscribe(
        data => {
          alert("TEST");
          this.types = data;
        },
        error => {
          console.log(error);
        })
  }

  addType(type: TypeOfVehicle){
    this.typeService.postType(type)
    .subscribe(
      data => {
        alert("Type successfully added!");
        this.getTypes();
      },
      error => {
        alert("Type error!");
      })
  }

  deleteType(id: number){
    this.typeService.deleteType(id)
    .subscribe(
      data => {
        alert("Type successfully deleted!");
        this.getTypes();
      },
      error => {
        alert("Type delete error!");
      })
  }

  saveType(i) {
    debugger
    this.typeService.updateType(this.types[i].Id,this.types[i])
    .subscribe(
      data => {
        alert("Type successfully updated!");
        this.getTypes();
      },
      error => {
        alert("Type update error!");
      })
  }

}
