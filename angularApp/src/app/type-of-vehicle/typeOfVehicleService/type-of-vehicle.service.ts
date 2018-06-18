import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { TypeOfVehicle } from '../../models/typeofvehicle.model';

@Injectable({
  providedIn: 'root'
})
export class TypeOfVehicleService {

  constructor(private httpClient: HttpClient) { }

  private parseData(res: Response) {
    return res.json() || [];
  }

  private handleError(error: Response | any) {
    let errorMessage: string;
    errorMessage = error.message ? error.message : error.toString();
    return Observable.throw(errorMessage);
  }

  getAllTypes(): Observable<TypeOfVehicle[]> {
    return this.httpClient.get<TypeOfVehicle[]>('http://localhost:51680/api/TypeOfVehicles')
  }

  postType(newMember): Observable<any> {
    return this.httpClient.post("http://localhost:51680/api/TypeOfVehicles", newMember)
  }

  deleteType(id: number){
    return this.httpClient.delete("http://localhost:51680/api/TypeOfVehicles/"+id)
  }

  updateType(id:number,type:TypeOfVehicle): Observable<TypeOfVehicle> {
    return this.httpClient.put<TypeOfVehicle>('http://localhost:51680/api/TypeOfVehicles/'+ id,type)
  }
}
