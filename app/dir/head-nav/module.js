define(['../module'], function(app) {
	'use strict';

	app.directive('headNav', ['$window', function($window) {

		console.log('Oye');

		return {

			restrict: 'E',
			templateUrl: 'app/dir/head-nav/partial.html',
			link: ['scope', 'element', function(scope, element) {
				//
			}],
			controller: ['$scope', function($scope) {
				$scope.scrollTo = function(id) {
					var win = $('body, html'),
						elm = angular.element('#' + id),
						top = elm.offset().top;

					win.animate({
						scrollTop: top
					}, 'slow');
				}

				// console.log('Oye');

				// var win = angular.element($window);
				// var elm = angular.element('.head-wrapper > .container');
				// var head = angular.element('.head-wrapper');
				// var upd = {
				// 	'position': 'fixed',
				// 	'top': 0,
				// 	'background-color': '#000',
				// 	'left': 0,
				// 	'right': 0,
				// 	'z-index': 1000
				// };
				// var ini = {
				// 	'position': 'initial',
				// 	'top': 'initial',
				// 	'background-color': 'initial',
				// 	'left': 'initial',
				// 	'right': 'initial'
				// };

				// console.log(head.height());

				// win.scroll(function(e) {
				// 	var posY = win.scrollTop(),
				// 		abtY = head.height(),
				// 		elmY = elm.height();

				// 	console.log(posY);

				// 	if ( posY >= abtY / 2 ) {
				// 		elm.css(upd);
				// 		if(posY == posY / 2) {
				// 			elm.fadeOut();
				// 		} else if ( posY >= abtY ) {
				// 			elm.slideDown();
				// 		}
				// 	} else {
				// 		elm.css(ini);
				// 		if( posY <= abtY / 2 ) {
				// 			elm.slideDown;
				// 		} else {
				// 			elm.fadeOut();
				// 		}
				// 		console.log('Ye');
				// 	}
				// });
			}]

		};

	}]);
});