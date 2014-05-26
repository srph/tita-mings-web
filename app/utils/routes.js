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
				'$route',
				'ProductSrvc',
				function($route, ProductSrvc) {
					var id = $route.current.params.pid;
					var pid = ( id === undefined )
						? 1
						: id;

					return ProductSrvc.get(pid);
				}
			];

			$routeProvider.when('/', {
				templateUrl: '/app/components/index.html',
				resolve: {
					products: products,
					product: product
				}
			}).when('/product/:pid', {
				templateUrl: '/app/components/index.html',
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