import { Problem } from "../data-structure/problem";
import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DataService {
  private _problemSource = new BehaviorSubject<Problem[]>([]);
  
  constructor(private http: Http) { }

  getProblems(): Observable<Problem[]> {
    // return this.problems;
    this.http.get('api/v1/problems')
      .toPromise()
      .then((res: Response) => {
        this._problemSource.next(res.json());
      })
      .catch(this.handleError);
    return this._problemSource.asObservable();
  }
  
  getProblem(id: number) {
    return this.http.get(`api/v1/problems/${id}`)
      .toPromise()
      .then((res: Response) => {
        this.getProblems();
        return res.json();
      })
      .catch(this.handleError);
  }

  addProblem(problem: Problem) {
    const headers = new Headers({'content-type': 'application/json'});
    return this.http.post('/api/v1/problems', problem, {headers: headers})
      .toPromise()
      .then((res: Response) => {
        this.getProblems();
        return res.json();
      })
      .catch(this.handleError)
  }

  buildAndRun(data: Object): Promise<Object> {
    const headers = new Headers({'content-type': 'application/json'});
    return this.http.post('/api/v1/build_and_run', data, {headers: headers})
      .toPromise()
      .then((res: Response) => {
        console.log('in client side build and run ', res);
        return res.json();
      })
      .catch(this.handleError);
  }

  /**
   * common error handler
   */
  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error);
  }
}
