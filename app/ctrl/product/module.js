define(['../module'], function(app) {
	'use strict';

	return app.controller('ProductCtrl', [
		'$scope',
		'ProductSrvc',
		'$routeParams',
		function($scope, ProductSrvc, $routeParams) {

			ProductSrvc.get().success(function(r) {
				ProductSrvc.list = r;
				$scope.products = ProductSrvc.list.products;

				var id = $routeParams.pid;
				console.log($routeParams);
				
				$scope.product = $scope.products[0];
				console.log(id);
			});

		}
	]);
});