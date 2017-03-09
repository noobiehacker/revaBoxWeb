import template from './workprocess.html';
import controller from './workprocess.controller';
import './workprocess.scss';

let workprocessComponent = {
  restrict: 'E',
  bindings: {cat: '@'},
  template,
  controller
};

export default workprocessComponent;
