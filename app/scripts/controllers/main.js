'use strict';

angular.module('measuredApp')
	.controller('MainCtrl', ['$scope', 'firebaseFactory',
		function($scope, firebaseFactory) {
			$scope.app = {};
			$scope.app.input = 1;
			$scope.app.postMessage = function(weight) {
				firebaseFactory.postMessage(weight).then(function() {
					$scope.app.input = 0;
					$scope.app.output = 1;
				});
			};
		}
	]);
