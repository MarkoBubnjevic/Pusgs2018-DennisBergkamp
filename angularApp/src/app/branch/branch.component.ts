import { Component, OnInit, ViewChild } from '@angular/core';

import {NgForm} from '@angular/forms';
import {BranchService} from './branchService/branch.service';
import {MapComponent} from '../map/map.component';
import { Branch } from 'src/app/models/branch.model';
import { Service } from 'src/app/models/service.model';
import {FileUploader,FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';

const URL = 'http://localhost:51680/api/Upload/user/PostBranchImage';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  services: Service[];
  branches: Branch[];

  @ViewChild(MapComponent) child;

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  url: string;

  constructor(private branchService: BranchService) { 
    this.uploader.onAfterAddingFile = (file) => {file.withCredentials = false;};
    this.uploader.onCompleteItem = (item: any, response: any,status: any, headers: any) => {
        this.url=JSON.parse(response);        
    };
  }

  uploadFile: any;

  ngOnInit() {
    this.getServices();
    this.getBranches();
  }

  checkServiceDeleted(i:number)
  {
    return this.services[i].Deleted == false;
  }

  checkBranchDeleted(i:number)
  {
    return this.branches[i].Deleted == false;
  }

  addBranch(branch: Branch, form: NgForm){
    branch.Logo = this.url;
    this.branchService.addBranch(branch)
    .subscribe(
      data => {
        alert("Branch successfully added!");
        this.getBranches();
        this.child.getBranches();
      },
      error => {
        alert("Branch error!");
      })
  }
  
  getServices(){
    this.branchService.getAllServices()
      .subscribe(
        data => {
          this.services = data;
        },
        error => {
          console.log(error);
        })
  }
  checkUserType()
  {
    return localStorage.role == 'Admin' || localStorage.role == 'Manager';
  }


  getBranches(){
    this.branchService.getAllBranches()
      .subscribe(
        data => {
          this.branches = data;
        },
        error => {
          console.log(error);
        })
  }

  checkRole(){
    return localStorage.role == "Admin";
  }


  deleteBranch(id: number){
    this.branchService.deleteBranch(id)
    .subscribe(
      data => {
        alert("Branch successfully deleted!");
        this.getServices();
        this.getBranches();
      },
      error => {
        alert("Branch delete error!");
      })
  }

  saveBranch(i) {
    this.branchService.updateBranch(this.branches[i].Id,this.branches[i])
    .subscribe(
      data => {
        alert("Branch successfully updated!");
        this.getServices();
        this.getBranches();
      },
      error => {
        alert("Branch update error!");
      })
  }

  handleUpload(data): void{
    if(data && data.response){
      data = JSON.parse(data.response);
      this.uploadFile = data;
    }
  }
}
