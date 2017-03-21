import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class WorkprocessService {

  constructor(private http: Http) {}

  public getGroups() {
    return this.http.get('http://localhost:5000/group');
  }

  public getSubGroups() {
    return this.http.get('http://localhost:5000/subGroup');
  }

}
