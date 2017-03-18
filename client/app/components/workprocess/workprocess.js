import angular from 'angular';
import uiRouter from 'angular-ui-router';
import workprocessComponent from './workprocess.component';
import WorkProcessService from './workprocess.factory'

let workprocessModule = angular.module('workprocess', [
  uiRouter
])

.component('workprocess', workprocessComponent)
.service('workprocessService', WorkProcessService)
.name;

export default workprocessModule;
