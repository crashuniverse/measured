'use strict';

angular.module('measuredApp')
  .factory('parseConfig', function() {
    var headers = {
      'X-Parse-Application-Id': '',
      'X-Parse-REST-API-Key': ''
    };

    // Public API here
    return {
      headers: headers
    };
  });
