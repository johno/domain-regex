var assert = require('assert');
var domain = require('..');

describe('domain-regex', function() {

  // https://publicsuffix.org/list/effective_tld_names.dat
  it('should handle a wide array of domains', function() {
    var validDomains = ['some-example.construction', 'example.co.uk', 'example.aerodrome.aero'];
    validDomains.forEach(function(validDomain) {
      assert.equal(domain().test(validDomain), true);
    });
  });

  it('should not find a domain when it does not exist', function() {
    var invalidDomains = [
      'notvalid.com.',
      '.notvalid.com',
      'not_valid.com',
      '',
      'thisiswaytoolongofatldoverherebecausethereisalimitof64thisiswaytoolongofatldoverherebecausethereisalimitof64.com'
    ];
    invalidDomains.forEach(function(invalidDomain) {
      assert.equal(domain().test(invalidDomain), false);
    });
  });
});
