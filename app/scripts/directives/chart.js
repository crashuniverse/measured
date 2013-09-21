'use strict';

angular.module('measuredApp')
	.directive('chart', function() {
		return {
			restrict: 'A',
			template: '<canvas></canvas>',
			replace: true,
			link: function postLink(scope, element, attrs) {
				var drawChart = function() {
					var context = element[0].getContext('2d');
					var options = {};
					var data = scope.$eval(attrs.data);
					if (data) {
						new Chart(context).Line(data, options);
					}
				};

				scope.$watch(attrs.data, function() {
					drawChart();
				});
			}
		};
	});
