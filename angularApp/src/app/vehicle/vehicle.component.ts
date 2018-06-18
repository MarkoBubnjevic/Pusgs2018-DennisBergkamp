import { Component, OnInit } from '@angular/core';

import { Vehicle } from '../models/vehicle.model';
import { VehicleService } from './vehicleService/vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicles: Vehicle[];

  constructor(private vehicleService: VehicleService) { }

  ngOnInit() {
    this.getVehicles();
  }

  getVehicles(){
    this.vehicleService.getAllVehicles().subscribe(
      data => {
        this.vehicles = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  addVehicle(vehicle: Vehicle){
    this.vehicleService.postVehicle(vehicle)
    .subscribe(
      data => {
        alert("Vehicle successfully added!");
        this.getVehicles()
      },
      error => {
        alert("Vehicle error!");
      })
  }

  deleteVehicle(id: number){
    this.vehicleService.deleteVehicle(id)
    .subscribe(
      data => {
        alert("Vehicle successfully deleted!");
        this.getVehicles();
      },
      error => {
        alert("Vehicle delete error!");
      })
  }

  saveService(i) {
    debugger
    this.vehicleService.updateVehicle(this.vehicles[i].Id,this.vehicles[i])
    .subscribe(
      data => {
        alert("Vehicle successfully updated!");
        this.getVehicles();
      },
      error => {
        alert("Vehicle update error!");
      })
  }
}
