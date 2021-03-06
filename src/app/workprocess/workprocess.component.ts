import {
  Component,
  OnInit
} from '@angular/core';
import {
  WorkprocessService
} from './workprocess.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/observable';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'workprocess',
  templateUrl: './workprocess.component.html'
})

export class WorkprocessComponent implements OnInit {

  public localState: any;

  public topName = 'Group';
  public bottomName = 'Sub-Group';
  public selectedGroup = ' ';
  public selectedSubGroup = ' ';
  public groups = [];
  public subGroups = [];
  public subGroupsJsonResult: JSON;

  constructor(
    public route: ActivatedRoute,
    public workprocessService: WorkprocessService
  ) {}

  public ngOnInit() {
    this.route
      .data
      .subscribe((data: any) => {
        // your resolved data from route
        this.localState = data.yourData;
      });

    console.log('hello `Workprocess` component');
    // static data that is bundled
    // var mockData = require('assets/mock-data/mock-data.json');
    // console.log('mockData', mockData);
    // if you're working with mock data you can also use http.get('assets/mock-data/mock-data.json')
    this.asyncDataWithWebpack();
    this.callGroupsNetwork();
    this.callSubGroupsNetwork();
  }

  public getSubGroups(input: String) {
    return null;
  }

  public updateSubGroup(event) {
    if (event === 'Finance') {
      this.subGroups = ['Finance1' , 'Finance2' , 'Finance3'];
    } else if (event === 'HR') {
      this.subGroups = ['HR1' , 'HR2' , 'HR3'];
    } else if (event === 'POD') {
      this.subGroups = ['POD1' , 'POD2' , 'POD3'];
    }
  }

  public callGroupsNetwork() {
    this.workprocessService.getGroups().subscribe((res) => {
      this.setUpGroupsArray(res.json());
    });
  }

  public callSubGroupsNetwork() {
    this.workprocessService.getSubGroups().subscribe((res) => {
      this.subGroupsJsonResult = res.json();
    });
  }

  public setUpGroupsArray(response: JSON) {
    for (let entry of response['category']) {
      this.groups.push(entry.name);
    }
  }

  public setUpSubGroupsArray(response: JSON) {
    let subCat = response['subCategory'];
    let array = subCat['finance'];
    for (let entry of array) {
      this.subGroups.push(entry.name);
    }
  }

  private asyncDataWithWebpack() {
    // you can also async load mock data with 'es6-promise-loader'
    // you would do this if you don't want the mock-data bundled
    // remember that 'es6-promise-loader' is a promise
    setTimeout(() => {

      System.import('../../assets/mock-data/mock-data.json')
        .then((json) => {
          console.log('async mockData', json);
          this.localState = json;
        });

    });
  }

}
