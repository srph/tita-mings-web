define(['../module'], function(app) {
	'use strict';

	return app.directive('contactMap', [function() {
		return {

			restrict: 'E',
			templateUrl: 'app/dir/contact-map/partial.html'

		}
	}]);
});