import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Service } from '../../models/service.model';
import { Comment } from '../../models/comment.model';
import { CommentBindingModel } from '../../models/commentBM.model';

@Injectable({
  providedIn: 'root'
})
export class SerPreviewService {

  constructor(private httpClient: HttpClient) { }

  private parseData(res: Response) {
    return res.json() || [];
  }

  private handleError(error: Response | any) {
    let errorMessage: string;
    errorMessage = error.message ? error.message : error.toString();
    return Observable.throw(errorMessage);
  }

  getService(id:number): Observable<Service> {
    return this.httpClient.get<Service>('http://localhost:51680/api/Services/'+id)
  }

  putComment(comment:CommentBindingModel): Observable<CommentBindingModel> {
    return this.httpClient.put<CommentBindingModel>('http://localhost:51680/api/Comments/',comment);
  }
}
