define(['../module', 'jquery'], function(app, $) {
	'use strict';

	return app.directive('productIndex', [function() {
		return {

			restrict: 'E',
			templateUrl: 'app/dir/product-index/partial.html',
			controller: ['$scope', function($scope) {
				//
			}]

		};
	}]);
});