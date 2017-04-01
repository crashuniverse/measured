'use strict';

angular.module('measuredApp')
	.controller('MainCtrl', ['$scope', 'parsely',
		function($scope, parsely) {
			$scope.app = {};
			$scope.app.input = 1;
			$scope.app.postMessage = function(weight) {
				parsely.postMessage(weight).then(function() {
					$scope.app.input = 0;
					$scope.app.output = 1;
          $scope.$apply();
				});
			};
		}
	]);
