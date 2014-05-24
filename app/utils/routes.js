define(['../main'], function(app) {
	'use strict';

	return app.config([
		'$routeProvider',
		'$locationProvider',
		function($routeProvider, $locationProvider) {

			$routeProvider
				.when('/', {
					templateUrl: 'app/components/partials/products.html'
				}).otherwise({
					redirectTo: '/'
				});

			$locationProvider.html5Mode(true);
			$locationProvider.hashPrefix('!#');

		}
		
	]);
});