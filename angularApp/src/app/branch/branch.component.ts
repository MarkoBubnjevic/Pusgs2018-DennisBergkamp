import { Component, OnInit } from '@angular/core';

import {BranchService} from './branchService/branch.service';
import { Branch } from 'src/app/models/branch.model';
import { Service } from 'src/app/models/service.model';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  services: Service[];
  branches: Branch[];

  constructor(private branchService: BranchService) { }

  ngOnInit() {
    this.getServices();
    this.getBranches();
  }

  addBranch(branch: Branch){
    this.branchService.addBranch(branch)
    .subscribe(
      data => {
        alert("Branch successfully added!");
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
        alert("Service successfully deleted!");
        this.getServices();
        this.getBranches();
      },
      error => {
        alert("Service delete error!");
      })
  }

  saveBranch(i) {
    this.branchService.updateBranch(i,this.branches[i])
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
}
