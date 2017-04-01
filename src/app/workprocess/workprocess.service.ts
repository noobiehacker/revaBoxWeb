import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';

@Injectable()
export class WorkprocessService {

  constructor(private http: Http) {}

  public getGroups(): Observable<Response> {
    return this.http.get('http://localhost:5000/group');
  }

  public getSubGroups(): Observable<Response> {
    return this.http.get('http://localhost:5000/subGroup');
  }

}
