import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute, Params} from '@angular/router';

import {Service} from '../models/service.model';
import {Vehicle} from '../models/vehicle.model';
import {Comment} from '../models/comment.model';
import {Rate} from '../models/rate.model';

import {SerPreviewService} from './serPreviewService/ser-preview.service';
import { CommentBindingModel } from '../models/commentBM.model';
import { text } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-ser-preview',
  templateUrl: './ser-preview.component.html',
  styleUrls: ['./ser-preview.component.css']
})
export class SerPreviewComponent implements OnInit {

  service:Service;

  comments: Comment[];


  constructor(private activatedRoute: ActivatedRoute, private serPreviewService: SerPreviewService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      let serviceId = params['id'];
      this.serPreviewService.getService(serviceId)
      .subscribe(
        data => {
          this.service = data;
          this.comments = this.service.Comments;
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
          this.comments = this.service.Comments;
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
        this.getService(this.service.Id);
      },
      error => {
        alert("Comment error!");
      })
  }

  deleteComment(id: number){
    this.serPreviewService.deleteComment(id)
    .subscribe(
      data => {
        alert("Comment successfully deleted!");
        this.getService(this.service.Id);
      },
      error => {
        alert("Comment delete error!");
      })
  }

  saveComment(i) {
    debugger
    this.serPreviewService.updateComment(this.comments[i].Id,this.comments[i])
    .subscribe(
      data => {
        alert("Comment successfully updated!");
        this.getService(this.service.Id);
      },
      error => {
        alert("Comment update error!");
      })
  }

  checkComDeleted(i:number){
    return this.comments[i].Deleted == false;
  }

  checkUserType()
  {
    return localStorage.role == 'Admin' || localStorage.role == 'Manager';
  }

  rateService(rate:Rate){
    this.serPreviewService.rateService(this.service.Id,rate)
    .subscribe(
      data => {
        alert("Service successfully rated!");
        this.getService(this.service.Id);
      },
      error => {
        alert("Rate error!");
      })
  }
}