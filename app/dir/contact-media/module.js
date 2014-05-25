define(['../module'], function(app) {
	'use strict';

	return app.directive('contactMedia', [function() {
		return {

			restrict: 'E',
			templateUrl: 'app/dir/contact-media/partial.html'

		};
	}]);
});