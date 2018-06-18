import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Vehicle } from '../../models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private httpClient: HttpClient) { }

  private parseData(res: Response) {
    return res.json() || [];
  }

  private handleError(error: Response | any) {
    let errorMessage: string;
    errorMessage = error.message ? error.message : error.toString();
    return Observable.throw(errorMessage);
  }

  getAllVehicles(): Observable<Vehicle[]> {
    return this.httpClient.get<Vehicle[]>('http://localhost:51680/api/Vehicles')
  
  }

  postVehicle(newMember): Observable<any> {
    return this.httpClient.post("http://localhost:51680/api/Vehicles", newMember)
  }

  deleteVehicle(id: number){
    return this.httpClient.delete("http://localhost:51680/api/Vehicles/"+id)
  }

  updateVehicle(id:number,vehicle:Vehicle): Observable<Vehicle> {
    return this.httpClient.put<Vehicle>('http://localhost:51680/api/Vehicles/'+ id,vehicle)
  }
}
