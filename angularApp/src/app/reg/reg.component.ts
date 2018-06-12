import { Component, OnInit } from '@angular/core';

import { RegService } from './regService/reg.service';
import { RegisterBinding } from '../models/registerBinding.model';
import { error } from 'selenium-webdriver';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css'],
  providers: [RegService]
})
export class RegComponent implements OnInit {

  isValid: boolean

  constructor(private regService: RegService) { }

  ngOnInit() {
  }

  onSubmit(appUser: RegisterBinding){
    this.regService.registerMethod(appUser)
    .subscribe(
      data => {
        alert("You have been successfully registrated!");
      },
      error => {
        alert("User already exists!");
      })
  }
}
