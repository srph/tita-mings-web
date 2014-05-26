define(['../module'], function(app) {
	'use strict';

	return app.controller('ProductCtrl', [
		'$scope',
		'ProductSrvc',
		'$routeParams',
		'$timeout',
		function($scope, ProductSrvc, $routeParams, $timeout) {

			// ProductSrvc.all().success(function(r) {
			// 	ProductSrvc.list = r;
			// 	$scope.products = ProductSrvc.list.products;

			// 	var id = $routeParams.pid;
			// 	console.log($routeParams);
				
			// 	$scope.product = $scope.products[0];
			// 	console.log(id);
			// });

			$scope.products = ProductSrvc.list;
			$scope.product = ProductSrvc.current;

			console.log($scope.products);
			$timeout(function() {
				console.log($routeParams);
			}, 1000);

		}
	]);
});