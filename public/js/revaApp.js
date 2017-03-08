var revaApp = angular.module('revaApp', []);

//Routing

//Directive
revaApp.directive('workProcess', [function(){

  return {
    restrict: 'E',
    scope: {
        cat: '='
    },
    //template: 'views/directives/dropdown.html',
    templateUrl: 'views/directives/dropdown.html',
    controller: function($scope){
      $scope.tempString = 'ABCD'
    }
  };

}]);
//Controller
