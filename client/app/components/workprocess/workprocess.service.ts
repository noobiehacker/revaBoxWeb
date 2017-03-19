import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WorkProcessService {
  constructor (
    private http: Http
  ) {}

  getUser() {
    let url = 'http://localhost:5000/'
    return this.http.get(url)
    .map((res:Response) => res.json());
  }

}
