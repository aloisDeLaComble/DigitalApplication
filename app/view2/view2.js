'use strict';
var application = angular.module('myApp.view2', ['ngRoute'])
application.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])
application.controller('View2Ctrl', [ '$scope', function($scope) {
$scope.name = '';
$scope.names = [{name:"Chris"}, {name:"Calvin"}];
$scope.addName = function() {
$scope.names.push( {'name':$scope.name} );
$scope.name = '';
};
}]);

var services = angular.module('myApp.services', ['ngResource']);

services.factory('Projects', ['$resource',
  function($resource){
    return $resource('http://localhost:8080/DigitalLab/rest/projects', {}, {
      query: {
    	  		method:'GET',
    	  		params:{},
    	  		isArray:false}
    });
  }]);

application.controller('ProjectsController', ['$scope', 'Projects', function($scope, Projects) {
	  $scope.request = Projects.query();
	}]);

application.controller('Test', ['$scope', function($scope){
    $scope.test = "Test";
}]);