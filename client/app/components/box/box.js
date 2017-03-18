import angular from 'angular';
import BoxFactory from './box.factory';

let boxModule = angular.module('box', [])

.factory('Box', BoxFactory)

export default boxModule;
