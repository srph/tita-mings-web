define([
	'angular',
	'ngRoute',
	'./ctrl/index',
	'./srvc/index',
	'./dir/index',
], function(angular, ngRoute) {
	'use strict';

	return angular.module('app', ['ngRoute','app.ctrl', 'app.srvc', 'app.dir']);
});