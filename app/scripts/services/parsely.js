'use strict';

angular.module('measuredApp')
  .factory('parsely', ['$http', 'parseConfig',
    function($http, parseConfig) {
      var postMessage = function(weight, callback) {
        var url = 'https://api.parse.com/1/classes/Weight';
        var jsonMessage = {
          'text': weight
        };

        $http({
          method: 'POST',
          url: url,
          headers: parseConfig.headers,
          contentType: 'application/json',
          data: jsonMessage
        })
          .success(function(data) {
            callback(data);
            console.log('Weight: ' + weight);
          })
          .error(function() {
            console.log('some problem with sending message');
          });
      };

      // Public API here
      return {
        postMessage: postMessage
      };
    }
  ]);