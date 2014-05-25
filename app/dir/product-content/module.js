define(['../module'], function(app) {
	'use strict';

	return app.directive('productContent', [function() {
		return {

			restrict: 'E',
			templateUrl: 'app/dir/product-content/partial.html'
			
		};
	}]);
});