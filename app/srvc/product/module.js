define(['../module'], function(app) {
	'use strict';

	return app.factory('ProductSrvc', [
		'$http',
		'$q',
		'$rootScope',
		function($http, $q, $rootScope) {

			return {

				current: null,

				list: null,

				get: function(pid) {
					var defer = $q.defer();

					$rootScope.$on('product.all.fetched', function(event, response) {
						console.log(response);
						this.list = response;
						console.log(this.list);

						if ( this.list.indexOf(pid) === 0 ) {
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
						console.log(r.products);
						$rootScope.$broadcast('product.all.fetched', r.products);
						defer.resolve();
					});

					return defer.promise;
				}

			};

		}

	]);
});