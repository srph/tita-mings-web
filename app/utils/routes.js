define(['../main'], function(app) {
	'use strict';

	return app.config([
		'$routeProvider',
		'$locationProvider',
		function($routeProvider, $locationProvider) {

			$routeProvider
				.when('/', {
					templateUrl: 'app/components/index.html'
				}).otherwise({
					redirectTo: '/'
				});

			$locationProvider.html5Mode(true);
			$locationProvider.hashPrefix('!#');

		}
		
	]);
});