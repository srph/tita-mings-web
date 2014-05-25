define(['../module'], function(app) {
	'use strict';

	return app.directive('about', [function() {

		return {

			restrict: 'E',
			templateUrl: 'app/dir/about/partial.html'

		};

	}]);
});