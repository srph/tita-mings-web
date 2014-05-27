define(['../main'], function(app) {
	'use strict';


	return app.config([
		'$routeProvider',
		function($routeProvider) {

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
						? 0
						: id;

					return ProductSrvc.get(pid);
				}
			];

			$routeProvider
				.when('/', {
					templateUrl: 'app/components/index.html',
					controller: 'ProductCtrl',
					resolve: {
						products: products,
						product: product
					}
				})
				.when('/product/:pid', {
					templateUrl: 'app/components/index.html',
					controller: 'ProductCtrl',
					resolve: {
						products: products,
						product: product
					}
				})
				.otherwise({
					redirectTo: '/'
				});

		}		
	]);
});