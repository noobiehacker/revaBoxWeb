import angular from 'angular';
import uiRouter from 'angular-ui-router';
import workprocessComponent from './workprocess.component';
import WorkProcessService from './workprocess.service'

let workprocessModule = angular.module('workprocess', [
  uiRouter
])

.component('workprocess', workprocessComponent)
.factory('workprocessService', WorkProcessService)
.name;

export default workprocessModule;
