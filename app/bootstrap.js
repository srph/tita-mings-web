requirejs.config({
	baseUrl: '../assets/vendor',

	paths: {
		jquery: './',
		bootstrap: './',
		angular: './',
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
	'./main'
],	function(angular, app) {
	'use strict';

	angular.element(document).ready(function() {
		angular.bootstrap(document, ['app']);
	});
});