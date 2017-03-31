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
  styles: [`
  `],
  template: `
    <h1>About</h1>
    <div>
      For hot module reloading run
      <pre>npm run start:hmr</pre>
    </div>
    <div>
      <h3>
        patrick@AngularClass.com
      </h3>
    </div>
    <pre>this.localState = {{ localState | json }}</pre>
  `
})

export class WorkprocessComponent implements OnInit {

  public localState: any;

  public topName = 'Group';
  public bottomName = 'Sub-Group';
  public selectedGroup: String = ' ';
  public groups = 'Groups';
  public subGroupMap = 'Sth';

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

  public updateSelectedGroup(group: String) {
    this.selectedGroup = group;
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