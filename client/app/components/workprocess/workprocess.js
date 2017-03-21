import angular from 'angular';
import uiRouter from 'angular-ui-router';
import workprocessComponent from './workprocess.component';
import { HttpModule, JsonpModule } from '@angular/http';

let workprocessModule = angular.module('workprocess', [
  uiRouter, HttpModule, JsonpModule
])

.component('workprocessComponent', workprocessComponent)

.name;

export default workprocessModule;
