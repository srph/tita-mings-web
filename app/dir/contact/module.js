define(['../module'], function(app) {
	'use strict';

	return app.directive('contact', [function() {

		return {

			restrict: 'E',
			templateUrl: 'app/dir/contact/partial.html'

		}
		
	}]);
});