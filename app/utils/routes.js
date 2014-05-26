define(['../main'], function(app) {
	'use strict';

	return app.config([
		'$routeProvider',
		'$locationProvider',
		function($routeProvider, $locationProvider) {

			var products = [
				'ProductSrvc',
				function(ProductSrvc) {
					return ProductSrvc.all();
				}
			];

			var product = [
				'$routeParams',
				'ProductSrvc',
				function($routeParams, ProductSrvc) {
					console.log($routeParams);
					var pid = ( $routeParams.pid == undefined )
						? 1
						: $routeParams.pid;

					return ProductSrvc.get(pid);
				}
			];

			$routeProvider.when('/', {
				templateUrl: 'app/components/index.html'
			}).when('/product/:pid', {
				templateUrl: 'app/components/index.html',
				resolve: {
					products: products,
					product: product
				}
			}).otherwise({
				redirectTo: '/'
			});

		}
		
	]);
});