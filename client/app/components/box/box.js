import angular from 'angular';
import boxComponent from './box.component';
import BoxService from'./box.service';

let boxModule = angular.module('box', [])
.component('box', boxComponent)

export default boxModule;
