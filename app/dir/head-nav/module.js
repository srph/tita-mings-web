define(['../module'], function(app) {
	'use strict';

	app.directive('headNav', [function() {

		return {

			restrict: 'E',
			templateUrl: 'app/dir/head-nav/partial.html',
			controller: ['$scope', function($scope) {
				$scope.scrollTo = function(id) {
					var win = $('body, html'),
						elm = angular.element('#' + id),
						top = elm.offset().top;

					console.log(top);
					console.log(win);

					win.animate({
						scrollTop: top
					}, 'slow');
				}
			}]
			// link: function(scope, element, attributes) {
			// 	var win = angular.element(window);
			// 	var link = angular.element('.nav-links li a');

			// 	link.on('click', function(event) {
			// 		// Prevent default action
			// 		event.preventDefault();

			// 		var id = $(this).attr('id'),
			// 			top = id.offset().top;

			// 		window.animate({
			// 			scrollTop: top
			// 		})
			// 	});
			// }

		}

	}]);
});