define(['../module'], function(app) {
	'use strict';

	return app.directive('productList', [function() {
		return {

			restrict: 'E',
			templateUrl: 'app/dir/product-content/partial.html'
			
		};
	}]);
});