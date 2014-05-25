define(['../module'], function(app) {
	'use strict';

	return app.directive('contactForm', [function() {
		return {

			restrict: 'E',
			templateUrl: 'app/dir/contact-form/partial.html'

		};
	}]);
});