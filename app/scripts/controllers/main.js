'use strict';

angular.module('measuredApp')
	.controller('MainCtrl', ['$scope', 'parsely',
		function($scope, parsely) {
			$scope.postMessage = function(weight) {
				parsely.postMessage(weight, function(data) {
					console.log(data);
				});
			};
		}
	]);
