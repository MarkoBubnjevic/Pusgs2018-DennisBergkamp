import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute, Params} from '@angular/router';

import {Service} from '../models/service.model';
import {Vehicle} from '../models/vehicle.model';
import {Comment} from '../models/comment.model';

import {SerPreviewService} from './serPreviewService/ser-preview.service';
import { CommentBindingModel } from '../models/commentBM.model';

@Component({
  selector: 'app-ser-preview',
  templateUrl: './ser-preview.component.html',
  styleUrls: ['./ser-preview.component.css']
})
export class SerPreviewComponent implements OnInit {

  serviceId: number;

  service:Service;

  vehicles: Vehicle[];

  constructor(private activatedRoute: ActivatedRoute, private serPreviewService: SerPreviewService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let serviceId = params['id'];
      this.serPreviewService.getService(serviceId)
      .subscribe(
        data => {
          this.service = data;
          this.vehicles = this.service.Vehicles;
        },
        error => {
          console.log(error);
        })
    });
  }

  getService(id: number){
    this.serPreviewService.getService(id)
      .subscribe(
        data => {
          this.service = data;
        },
        error => {
          console.log(error);
        })
  }

  addComment(comment:CommentBindingModel){
    comment.ServiceName = this.service.Name;
    this.serPreviewService.putComment(comment).
    subscribe(
      data => {
        alert("Comment successfully added!");
      },
      error => {
        alert("Comment error!");
      })
  }
}
