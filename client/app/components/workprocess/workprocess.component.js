import template from './workprocess.html';
import controller from './workprocess.controller';
import WorkProcessService from './workprocess.factory'
import './workprocess.scss';

let workprocessComponent = {
  restrict: 'E',
  bindings: {name: '@'},
  template,
  controller,
};

export default workprocessComponent;
