import {
  Component,
  OnInit
} from '@angular/core';
import {
  WorkprocessService
} from './workprocess.service';
import { ActivatedRoute } from '@angular/router';

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
  public groups = ['Finance', 'HR', 'POD'];
  public subGroups = ['Ath' , 'Bth' , 'Cth'];

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
  }

  public getSubGroups(input: String) {
    return null;
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

  private updateSubGroup(event) {
    if(event == 'Finance'){
      this.subGroups = ['Finance1' , 'Finance2' , 'Finance3']
    } else if (event == 'HR'){
      this.subGroups = ['HR1' , 'HR2' , 'HR3']
    } else if (event == 'POD'){
      this.subGroups = ['POD1' , 'POD2' , 'POD3']
    }
  }

}
