import { Injectable } from '@angular/core';
import { Problem } from '../dataStructure/Problem';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


@Injectable()
export class DataService {
  constructor(private http: Http) { }

  getProblems(){
    return this.http.get("/api/v1/problems").map((res: Response) => res.json())
    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));;
  }

  getProblem(id){
    return this.http.get(`/api/v1/problems/${id}`).toPromise().then(
      (res: Response) => {
        this.getProblems();
        return res.json();
      }
    )
  }

  addProblem(problem: Problem){
    const headers = new Headers({'content-type': 'application/json'});
    this.http.post('/api/v1/problems', problem, {headers: headers})
    .toPromise()
    .then((res: Response) => {
      this.getProblems();
    }).catch(this.handleError);
  }

  buildAndRun(codes){
    const headers = new Headers({'content-type': 'application/json'});
    return this.http.post('/api/v1/buildAndRun', codes, {headers: headers})
    .toPromise()
    .then((res) => {
      return res.json();
    }).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error);
  }
}
