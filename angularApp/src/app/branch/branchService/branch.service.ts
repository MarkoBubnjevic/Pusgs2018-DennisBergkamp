import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Branch } from '../../models/branch.model';
import { Service } from '../../models/service.model';

@Injectable({
  providedIn: 'root'
})
export class BranchService {

  constructor(private httpClient: HttpClient) { }

  private parseData(res: Response) {
    return res.json() || [];
  }

  private handleError(error: Response | any) {
    let errorMessage: string;
    errorMessage = error.message ? error.message : error.toString();
    return Observable.throw(errorMessage);
  }

  addBranch(newMember): Observable<any> {

    //let body = new FormData();
    //body.append('image', )
    //body.append('branch', JSON.stringify(newMember))
    return this.httpClient.post("http://localhost:51680/api/Branches", newMember)
  }

  getAllServices(): Observable<Service[]> {
    return this.httpClient.get<Service[]>('http://localhost:51680/api/Services') 
  }

  getAllBranches(): Observable<Branch[]> {
    return this.httpClient.get<Branch[]>('http://localhost:51680/api/Branches'); 
  }

  deleteBranch(id: number){
    return this.httpClient.delete("http://localhost:51680/api/Branches/"+id)
  }

  updateBranch(id:number,branch:Branch): Observable<Branch> {
    return this.httpClient.put<Branch>('http://localhost:51680/api/Branches/'+ id,branch)
  }
}
