define(['../module'], function(app) {
	'use strict';

	return app.controller('ProductCtrl', [
		'$scope',
		'ProductSrvc',
		function($scope, ProductSrvc) {

			ProductSrvc.get().success(function(r) {
				ProductSrvc.list = r;
				$scope.products = ProductSrvc.list.products;
			});

		}
	]);
});