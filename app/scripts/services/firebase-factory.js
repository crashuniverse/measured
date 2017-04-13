'use strict';

angular.module('measuredApp')
  .factory('firebaseFactory', ['$q', '$rootScope',
    function($q, $rootScope) {

      var postMessage = function(data) {
        var deferred = $q.defer();
        var weight = {
          text: data,
          '_created_at': {
            date: new Date().toISOString()
          }
        };
        firebase.database().ref('/weights/').once('value').then(function(snapshot) {
          var weights = snapshot.val();
          var newKey = weights.length;
          var updates = {};
          updates['/weights/' + newKey] = weight;
          firebase.database().ref().update(updates);
          $rootScope.$apply(function() {
            deferred.resolve(true);
          });
        });
        return deferred.promise;
      };

      var getWeights = function() {
        var deferred = $q.defer();
        firebase.database().ref('/weights/').once('value').then(function(snapshot) {
          var weights = snapshot.val();
          $rootScope.$apply(function() {
            deferred.resolve(weights);
          });
        });
        return deferred.promise;
      };

      // Public API here
      return {
        postMessage: postMessage,
        getWeights: getWeights
      };
    }

  ]);