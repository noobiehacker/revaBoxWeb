import template from './workprocess.html';
import controller from './workprocess.controller';
import WorkProcessFactory from './workprocess.factory'
import './workprocess.scss';

let workprocessComponent = {
  restrict: 'E',
  bindings: {name: '@'},
  template,
  controller,
  providers: [WorkProcessFactory]
};

export default workprocessComponent;
