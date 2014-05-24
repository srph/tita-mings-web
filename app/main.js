define([
	'angular',
	'./ctrl/index',
	'./srvc/index',
	'./dir/index',
], function(angular) {
	'use strict';

	return angular.module('app', ['app.ctrl', 'app.srvc', 'app.dir']);
});