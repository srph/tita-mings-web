define(['../module'], function(app) {
	'use strict';

	return app.controller('ProductCtrl', [
		'$scope',
		'ProductSrvc',
		function($scope, ProductSrvc) {

			$scope.products = ProductSrvc.list;
			$scope.product = ProductSrvc.current;

			console.info($scope.products);
		}
	]);
});