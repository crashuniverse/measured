'use strict';

angular.module('measuredApp')
	.controller('ViewCtrl', ['$scope', 'parsely',
		function($scope, parsely) {
			$scope.app = {};

			parsely.getWeights().then(function(data) {
				$scope.app.data = processData(data);
        $scope.$apply();
      });

			var processData = function(data){
				var timestamps = _.pluck(data, '_created_at');
				var labels = _.map(timestamps, function(timestamp){
					var t = new Date(timestamp.date);
					var string = t.getDate().toString() + '-' + (t.getMonth()+1).toString() + '-' + t.getFullYear().toString();
					return string;
				});
				var series = _.pluck(data, 'text');

				var processedData = {
					labels: labels,
					datasets: [{
						data: series
					}]
				};

				return processedData;
			};


		}
	]);
