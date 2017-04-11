'use strict';

angular.module('measuredApp')
  .factory('parsely', [
    function() {

      var postMessage = function(data) {
        return new Promise(function(resolve) {
          var weight = {
            text: data,
            '_created_at': {
              date: new Date().toISOString()
            }
          };
          return firebase.database().ref('/weights/').once('value').then(function(snapshot) {
            var weights = snapshot.val();
            var newKey = weights.length;
            var updates = {};
            updates['/weights/' + newKey] = weight;
            firebase.database().ref().update(updates);
            resolve(true);
          });
        });
      };

      var getWeights = function() {
        return new Promise(function(resolve) {
          firebase.database().ref('/weights/').once('value').then(function(snapshot) {
            var weights = snapshot.val();
            resolve(weights);
          });
        });
      };

      // Public API here
      return {
        postMessage: postMessage,
        getWeights: getWeights
      };
    }

  ]);
