import { Component} from '@angular/core'
//import {WorkProcessService} from './workprocess.service';

@Component({
  selector: 'workprocessComponent',
  templateUrl: './workprocess.html',
//  providers: [WorkProcessService]

})

export class WorkprocessComponent{

  constructor(
    //private workProcessService : WorkProcessService
  )
  {}

}
// import WorkProcessService from './workprocess.service'
// import './workprocess.scss';
//
// let workprocessComponent = {
//   restrict: 'E',
//   bindings: {name: '@'},
//   template,
//   controller,
//   providers: [WorkProcessService]
// };
//
// export default workprocessComponent;
