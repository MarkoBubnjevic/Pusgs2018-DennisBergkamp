import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { AppUser } from '../../models/appuser.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: Http, private httpClient: HttpClient) { }

  private parseData(res: Response) {
    return res.json() || [];
  }

  private handleError(error: Response | any) {
    let errorMessage: string;
    errorMessage = error.message ? error.message : error.toString();
    return Observable.throw(errorMessage);
  }

   getMethodDemo(): Observable<AppUser> {
    return this.http.get('https://localhost:4200/posts/1')
      .map(this.parseData)
      .catch(this.handleError);
  }

  postMethodDemo(newMember): Observable<any> {
    return this.httpClient.post("https://localhost:4200/posts", newMember)
  }

}
