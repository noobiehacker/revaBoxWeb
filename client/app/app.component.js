import template from './app.html';
import BoxService from './components/box/box.service.js';
import './app.scss';

let appComponent = {
  template,
  restrict: 'E'
  providers: [BoxService]
};

export default appComponent;
