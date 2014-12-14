var assert = require('assert');
var domain = require('..');

describe('domain-regex', function() {

  // https://publicsuffix.org/list/effective_tld_names.dat
  it('should handle a wide array of domains', function() {
    var validDomains = [
      'some-example.construction',
      'example.co.uk',
      'example.aerodrome.aero',
      'g.co'
    ];

    validDomains.forEach(function(validDomain) {
      assert.ok(domain().test(validDomain));
    });
  });

  it('should handle IDNs', function() {
    var validDomains = [
      'something.組织.hk',
      'example.2000.hu',
      '岡山.jp'
    ];

    validDomains.forEach(function(validDomain) {
      assert.ok(domain().test(validDomain));
    });
  });

  it('should not find a domain when it does not exist', function() {
    var invalidDomains = [
      'notvalid.com.',
      '.notvalid.com',
      'not_valid.com',
      '-notvalid.com',
      'notvalid-.com',
      'notvalid.com-',
      'this.istoolongofatldrighthere.com',
      'thisiswaytoolongofatldoverherebecausethereisalimitof64thisiswaytoolongofatldoverherebecausethereisalimitof64.com'
    ];

    invalidDomains.forEach(function(invalidDomain) {
      console.log(invalidDomain);
      assert.ok(domain().test(invalidDomain));
    });
  });
});
