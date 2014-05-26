define(['../module'], function(app) {
	'use strict';

	return app.factory('ProductSrvc', [
		'$http',
		'$q',
		'$rootScope',
		function($http, $q, $rootScope) {

			return {

				current: null,

				list: [],

				get: function(pid) {
					var defer = $q.defer();

					$rootScope.$on('product.all.fetched', function() {
						if ( this.list.indexOf(pid) !== undefined ) {
							this.current = this.list[pid];
							defer.resolve();
						} else {
							defer.reject();
						}
					});

					return defer.promise;
				},

				all: function() {
					var defer = $q.defer();
					var request = $http.get('/app/data/products.json');
						
					request.success(function(r) {
						this.list = r.products;
						$rootScope.$broadcast('product.all.fetched');
						defer.resolve();
					});

					return defer.promise;
				}

			};

		}

	]);
});