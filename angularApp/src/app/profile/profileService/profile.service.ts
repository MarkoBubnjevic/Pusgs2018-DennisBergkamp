import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { AppUser } from '../../models/appuser.model';
import { EmailBM } from '../../models/emailBM.model';
import { FinishProfile } from '../../models/finishProfile.model';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: Http, private httpClient: HttpClient) { }
  
    private parseData(res: Response) {
      return res.json() || [];
    }
  
    private handleError(error: Response | any) {
      let errorMessage: string;
      errorMessage = error.message ? error.message : error.toString();
      return Observable.throw(errorMessage);
    }
  
     getUser(id:number): Observable<AppUser> {
      return this.httpClient.get<AppUser>('http://localhost:51680/api/AppUsers/' + id)
    
    }

    putUser(id:number,appUser:AppUser): Observable<AppUser> {
      return this.httpClient.put<AppUser>('http://localhost:51680/api/AppUsers/'+ id,appUser)
    
    }

    getUserFromUsername(username: string): Observable<AppUser> {
      return this.httpClient.get<AppUser>('http://localhost:51680/api/AppUsers/RetInfo/'+username);
    }

    finishProfile(id:number ,profileBM: FinishProfile): Observable<AppUser> {
      return this.httpClient.put<AppUser>('http://localhost:51680/api/AppUsers/Finish/'+ id,profileBM)
    }
}
