'use strict';
angular.module('myApp.view1', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])
.controller('View1Ctrl', [ '$scope', function($scope) {
$scope.name = '';
$scope.names = [{name:"Chris"}, {name:"Calvin"}];
$scope.addName = function() {
$scope.names.push( {'name':$scope.name} );
$scope.name = '';
};
}]);

var services = angular.module('view1.services', ['ngResource']);

services.factory('ShapeWithPropertyFactory', function ($resource) {
    return $resource('/ShapesComputations/rest/displayshapeproperty/', {}, {
        query: {
            method: 'GET',
            params: {},
            isArray: false
        }
    })
});




//app.controller('ShapeWithPropertyCtrl', ['$scope', 'ShapeWithPropertyFactory', function ($scope, ShapeWithPropertyFactory) {
//	ShapeWithPropertyFactory.get({}, function (ShapeWithPropertyFactory) {
//        $scope.property = 'Bonjour monde !';
//    })
//}]);
