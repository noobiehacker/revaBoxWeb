import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class WorkprocessService {

  constructor(private http: Http) {}

  public getAPIData() {
    return this.http.get('http://localhost:5000');
  }

  public getData() {
    return this.getAPIData()
      .toPromise()
      .then((response) => response.json());
  }

}
