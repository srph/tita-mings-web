define(['../module'], function(app) {
	'use strict';

	app.directive('headNav', [function() {

		return {

			restrict: 'E',
			templateUrl: 'app/dir/head-nav/partial.html'

		}

	}]);
});