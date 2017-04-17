'use strict';

angular.module('measuredApp')
	.controller('MainCtrl', ['$scope', 'firebaseFactory',
		function($scope, firebaseFactory) {
			$scope.app = {
        input: true,
        output: false
      };
			$scope.app.postMessage = function(weight) {
				firebaseFactory.postMessage(weight).then(function() {
					$scope.app.input = false;
					$scope.app.output = true;
				});
			};
		}
	]);
