import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class BoxService{

  //private _serverUrl : string = 'http://localhost:5000';

  constructor() {}

  public getCategory(){
//    let queryUrl = this._serverUrl + "/category";
    //return Http.get(queryUrl).map((response) => response.json);
  }

}
