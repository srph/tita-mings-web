define(['../module'], function(app) {
	'use strict';

	return app.controller('ProductCtrl', [
		'$scope',
		'ProductSrvc',
		function($scope, ProductSrvc) {

			$scope.products = ProductSrvc.list;

		}
	]);
});