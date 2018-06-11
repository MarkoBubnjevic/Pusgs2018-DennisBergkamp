import { Component, OnInit } from '@angular/core';

import { RegService } from './regService/reg.service';
import { RegisterBinding } from '../models/registerBinding.model';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css'],
  providers: [RegService]
})
export class RegComponent implements OnInit {

  private methodResult: RegisterBinding;
  private dataFromInput: RegisterBinding;

  constructor(private regService: RegService) { }

  ngOnInit() {
  }

  callPost(){

    this.regService.registerMethod(this.dataFromInput)
    .subscribe(
      data => {
        this.methodResult = data;
      },
      error => {
        console.log(error);
      })
  }

}
