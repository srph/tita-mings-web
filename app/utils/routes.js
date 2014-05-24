define(['../main'], function(app) {
	'use strict';

	return app.config([
		'$routeProvider',
		function($routeProvider) {

		$routeProvider
			.when('/', {
				tempalteUrl: 'app/partials/products.html'
			}).otherwise({
				redirectTo: '/'
			})

		}
		
	]);
});