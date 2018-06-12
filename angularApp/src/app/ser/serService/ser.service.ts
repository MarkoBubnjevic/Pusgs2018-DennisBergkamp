import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Service } from '../../models/service.model';


@Injectable({
  providedIn: 'root'
})
export class SerService {

  constructor(private http: Http, private httpClient: HttpClient) { }
  
    private parseData(res: Response) {
      return res.json() || [];
    }
  
    private handleError(error: Response | any) {
      let errorMessage: string;
      errorMessage = error.message ? error.message : error.toString();
      return Observable.throw(errorMessage);
    }
  
     getAllServices(): Observable<Service[]> {
      return this.httpClient.get<Service[]>('http://localhost:51680/api/Services')
    
    }
  
    postService(newMember): Observable<any> {
      return this.httpClient.post("http://jsonplaceholder.typicode.com/posts", newMember)
    }
}
