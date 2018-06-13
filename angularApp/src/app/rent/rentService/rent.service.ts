import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Rent } from '../../models/rent.model';
import { Vehicle } from '../../models/vehicle.model';
import { Branch } from 'src/app/models/branch.model';

@Injectable({
  providedIn: 'root'
})
export class RentService {

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

  getAllBranches(): Observable<Branch[]> {
    return this.httpClient.get<Branch[]>('http://localhost:51680/api/Branches')
  }
}
