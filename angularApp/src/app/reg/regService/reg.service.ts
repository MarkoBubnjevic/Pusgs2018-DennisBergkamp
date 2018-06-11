import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { RegisterBinding } from '../../models/registerBinding.model';

@Injectable({
  providedIn: 'root'
})
export class RegService {

  constructor(private httpClient: HttpClient) { }

  private parseData(res: Response) {
    return res.json() || [];
  }

  private handleError(error: Response | any) {
    let errorMessage: string;
    errorMessage = error.message ? error.message : error.toString();
    return Observable.throw(errorMessage);
  }


  registerMethod(newMember): Observable<any> {
    return this.httpClient.post("https://localhost:4200/api/Account/Register", newMember)
  }
}
