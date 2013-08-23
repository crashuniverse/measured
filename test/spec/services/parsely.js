'use strict';

describe('Service: parsely', function () {

  // load the service's module
  beforeEach(module('measuredApp'));

  // instantiate service
  var parsely;
  beforeEach(inject(function (_parsely_) {
    parsely = _parsely_;
  }));

  it('should do something', function () {
    expect(!!parsely).toBe(true);
  });

});
