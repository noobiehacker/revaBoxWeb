import angular from 'angular';
import uiRouter from 'angular-ui-router';
import workprocessComponent from './workprocess.component';
import WorkProcessFactory from './workprocess.factory'

let workprocessModule = angular.module('workprocess', [
  uiRouter
])

.component('workprocess', workprocessComponent)
.factory('workprocessService', WorkProcessFactory)
.name;

export default workprocessModule;
