import angular from 'angular';
import BoxService from './box.service';

let boxModule = angular.module('box', [])
.service('Box', BoxService)

export default boxModule;
