import angular from 'angular';
import uiRouter from 'angular-ui-router';
import workprocessComponent from './workprocess.component';
import WorkProcessService from './workprocess.service';
import { HttpModule, JsonpModule } from '@angular/http';

let workprocessModule = angular.module('workprocess', [
  uiRouter, HttpModule, JsonpModule
])

.component('workprocess', workprocessComponent)
.factory('workprocessService', WorkProcessService)
.name;

export default workprocessModule;
