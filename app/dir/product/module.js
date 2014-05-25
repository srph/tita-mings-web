define(['../module'], function(app) {
	'use strict';

	return app.directive('product', [function() {
		return {

			restrict: 'E',
			templateUrl: 'app/dir/product/partial.html'

		};
	}]);
});