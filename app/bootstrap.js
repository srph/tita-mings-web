requirejs.config({

	paths: {
		jquery: '../assets/vendor/jquery/dist/jquery.min',
		bootstrap: '../assets/vendor/bootstrap/dist/js/bootstrap.min',
		angular: '../assets/vendor/angular/angular.min',
		ngRoute: '../assets/vendor/angular-route/angular-route.min'
	},

	shim: {
		jquery: {
			exports: 'jquery'
		},

		bootstrap: {
			deps: ['jquery']
		},

		angular: {
			exports: 'angular'
		},

		ngRoute: {
			exports: 'ngRoute',
			deps: ['angular']
		}
	}
});

require([
	'angular',
	'./utils/routes'
],	function(angular, app) {
	'use strict';

	angular.element(document).ready(function() {
		angular.bootstrap(document, ['app']);
	});
});