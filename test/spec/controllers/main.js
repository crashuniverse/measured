'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('measuredApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should always be true', function() {
    expect(true).toBe(true);
  });
});
