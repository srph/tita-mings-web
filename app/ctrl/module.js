define([
	'angular',
	'ngRoute',
	'../srvc/index'
], function(angular, ngRoute) {
	'use strict';

	return angular.module('app.ctrl', ['app.srvc', 'ngRoute']);
});