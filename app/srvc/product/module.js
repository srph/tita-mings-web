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
					var obj = this;

					$rootScope.$on('product.all.fetched', function(event) {

						if ( obj.list.indexOf(pid) === 0 ) {
							obj.current = obj.list[pid];
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
					var obj = this;
						
					request.success(function(r) {
						obj.list = r.products;
						$rootScope.$broadcast('product.all.fetched');
						defer.resolve();
					});

					return defer.promise;
				}

			};

		}

	]);
});