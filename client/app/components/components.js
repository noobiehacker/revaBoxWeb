import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import Workprocess from './workprocess/workprocess'

let componentModule = angular.module('app.components', [
  Home,
  Workprocess
  //,
  //About
])

.name;

export default componentModule;
