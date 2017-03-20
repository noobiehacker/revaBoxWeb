import template from './workprocess.html';
import controller from './workprocess.controller';
import WorkProcessService from './workprocess.service'
import './workprocess.scss';

let workprocessComponent = {
  restrict: 'E',
  bindings: {name: '@'},
  template,
  controller,
  providers: [WorkProcessService]
};

export default workprocessComponent;
