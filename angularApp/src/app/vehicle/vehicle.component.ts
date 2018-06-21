import { Component, OnInit } from '@angular/core';

import { Vehicle } from '../models/vehicle.model';
import { VehicleService } from './vehicleService/vehicle.service';
import { VehicleBindingModel } from '../models/vehicleBM.model';
import { TypeOfVehicle } from '../models/typeofvehicle.model';
import { Service } from '../models/service.model';

import {FileUploader,FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

const URL = 'http://localhost:51680/api/Upload/user/PostVehicleImage';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicles: Vehicle[];
  services: Service[];
  showVehicles: Vehicle[];
  types: TypeOfVehicle[];
  public searchVar: string;

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  url: string;

  constructor(private vehicleService: VehicleService) { 
    this.uploader.onAfterAddingFile = (file) => {file.withCredentials = false;};
    this.uploader.onCompleteItem = (item: any, response: any,status: any, headers: any) => {
        this.url=JSON.parse(response);  
    };
  }

  uploadFile: any;

  ngOnInit() {
    this.getVehicles();
    this.getServices();
    this.getTypes();
  }

  handleUpload(data): void{
    if(data && data.response){
      data = JSON.parse(data.response);
      this.uploadFile = data;
    }
  }

  getVehicles(){
    this.vehicleService.getAllVehicles().subscribe(
      data => {
        this.vehicles = data;
        this.showVehicles = this.vehicles;
      },
      error => {
        console.log(error);
      }
    )
  }

  getTypes(){
    this.vehicleService.getAllTypes().subscribe(
      data => {
        this.types = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  searchVehicle(){
    this.showVehicles = new Array<Vehicle>();
    if(this.searchVar == ""){
      this.showVehicles = this.vehicles
    }
    else{
      for (let item of this.vehicles){
        if(item.Type.Name.indexOf(this.searchVar) >= 0){
          this.showVehicles.push(item);
        }
      }
    }
  }

  getServices(){
    this.vehicleService.getAllServices().subscribe(
      data => {
        this.services = data;
      },
      error => {
        console.log(error);
      }
    )
  }

  addVehicle(vehicle: VehicleBindingModel){
    vehicle.Images = this.url;
    vehicle.Deleted = false;
    vehicle.Unvailable = false;
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

  makeUnavailabe(id: number){
    this.vehicleService.makeUnavailable(id)
    .subscribe(
      data => {
        alert("Vehicle is unavailable!");
        this.getVehicles();
      },
      error => {
        alert("Error!");
      })
  }

  checkUserType()
  {
    return localStorage.role == 'Admin' || localStorage.role == 'Manager';
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
