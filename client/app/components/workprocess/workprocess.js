import angular from 'angular';
import uiRouter from 'angular-ui-router';
import workprocessComponent from './workprocess.component';

let workprocessModule = angular.module('workprocess', [
  uiRouter
])

.component('workprocess', workprocessComponent)

.name;

export default workprocessModule;
