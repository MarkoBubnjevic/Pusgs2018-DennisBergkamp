import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Service } from '../../models/service.model';
import { Comment } from '../../models/comment.model';
import { CommentBindingModel } from '../../models/commentBM.model';
import { Rate } from '../../models/rate.model';

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
    return this.httpClient.post<CommentBindingModel>('http://localhost:51680/api/Comments',comment);
  }

  deleteComment(id: number){
    return this.httpClient.delete("http://localhost:51680/api/Comments/"+id)
  }

  updateComment(id:number,comment:Comment): Observable<Comment> {
    return this.httpClient.put<Comment>('http://localhost:51680/api/Comments/'+ id,comment)
  }

  rateService(id:number,rate:Rate): Observable<Rate> {
    return this.httpClient.put<Rate>('http://localhost:51680/api/Services/Rate/'+ id,rate);
  }

}
