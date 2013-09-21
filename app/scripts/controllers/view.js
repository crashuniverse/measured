'use strict';

angular.module('measuredApp')
	.controller('ViewCtrl', ['$scope', 'parsely',
		function($scope, parsely) {
			$scope.app = {};

			parsely.getWeights(function(data){
				var processedData = processData(data);
				$scope.app.data = processedData;
			});

			var processData = function(data){
				var timestamps = _.pluck(data, 'createdAt');
				var labels = _.map(timestamps, function(timestamp){
					var t = new Date(timestamp);
					var string = t.getDate().toString() + '-' + t.getMonth().toString() + '-' + t.getFullYear().toString();
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
