import { Component, OnInit } from '@angular/core';

import {SerService} from './serService/ser.service';
import { Service } from 'src/app/models/service.model';

@Component({
  selector: 'app-ser',
  templateUrl: './ser.component.html',
  styleUrls: ['./ser.component.css']
})
export class SerComponent implements OnInit {

  services: Service[];

  constructor(private serService: SerService) { }

  ngOnInit() {
    this.callGet();
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


  deleteService(id: number){
    this.serService.deleteService(id)
    .subscribe(
      data => {
        alert("Service successfully deleted!");
        this.callGet();
      },
      error => {
        alert("Service error!");
      })
  }

  saveService(i) {
    console.log(this.services[i])
  }
}
