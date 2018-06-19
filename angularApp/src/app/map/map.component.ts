import { Component, OnInit,ViewChild, Input } from '@angular/core';

import { MapInfo } from '../models/map-info.model';

import {MapService} from './mapService/map.service';
import { Branch } from 'src/app/models/branch.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  styles: ['agm-map {height: 500px; width: 700px;}'] //postavljamo sirinu i visinu mape
})
export class MapComponent implements OnInit {

  mapInfo: MapInfo;

  mapInfos: MapInfo[];
 
  branches: Branch[];

  ngOnInit() {
    this.mapInfos = new Array<MapInfo>();
    this.getBranches();
  }

  constructor(private mapService: MapService){

    this.mapInfo = new MapInfo(45.242268, 19.842954, 
    "assets/ftn.png",
    "Jugodrvo" , "" , "http://ftn.uns.ac.rs/691618389/fakultet-tehnickih-nauka");
  }

  placeMarker($event){
    console.log($event.coords.lat);
    console.log($event.coords.lng);
  }

  addMarkers(){
    for(let item of this.branches){
      this.mapInfos.push(new MapInfo(item.Latitude, item.Longitude, 
        "",
        item.Address , "" , ""));
    }
  }

  getBranches(){
    this.mapService.getAllBranches()
      .subscribe(
        data => {
          this.branches = data;
          this.addMarkers();
        },
        error => {
          console.log(error);
        })
  }
}
