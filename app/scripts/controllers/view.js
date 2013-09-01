'use strict';

angular.module('measuredApp')
	.controller('ViewCtrl', ['$scope', 'parsely',
		function($scope, parsely) {
			$scope.app = {};

			parsely.getWeights(function(data){
				$scope.app.data = data;
				console.log(data);
				drawChart();
			});

			var drawChart = function() {
				var timestamps = _.pluck($scope.app.data, 'createdAt');
				var labels = _.map(timestamps, function(timestamp){
					var t = new Date(timestamp);
					var string = t.getDate().toString() + '-' + t.getMonth().toString() + '-' + t.getFullYear().toString();
					console.log(string);
					return string;
				});
				var series = _.pluck($scope.app.data, 'text');

				var data = {
					labels: labels,
					datasets: [{
						data: series
					}]
				};

				// dom manipulation - should goto directive asap
				var context = document.getElementById('chart').getContext('2d');
				var options = {};
				new Chart(context).Line(data, options);
			};

		}
	]);
