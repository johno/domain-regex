var assert = require('assert');
var punycode = require('punycode');
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
      punycode.toASCII('something.組织.hk'),
      punycode.toASCII('組織.tw'),
      'example.2000.hu',
      punycode.toASCII('岡山.jp')
    ];

    validDomains.forEach(function(validDomain) {
      assert.ok(domain().test(validDomain));
    });
  });

  it('should not find a domain when it does not exist', function() {
    var invalidDomains = [
      'notvalid.com.',
      '.notvalid.com',
      '-notvalid.com',
      'notvalid.com-',
      'this.istoolongofatldrighthere.com',
    ];

    invalidDomains.forEach(function(invalidDomain) {
      assert.ok(domain().test(invalidDomain));
    });
  });
});
