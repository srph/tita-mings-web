define(['../module'], function(app) {
	'use strict';

	return app.factory('ProductSrvc', [
		'$http',
		function($http) {

			return {

				current: null,

				list: [],

				get: function() {
					return $http.get('/app/data/products.json');
				}

			};

		}

	]);
});