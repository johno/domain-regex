# Domain Regex

[![Build Status](https://travis-ci.org/johnotander/domain-regex.svg?branch=master)](https://travis-ci.org/johnotander/domain-regex)

A regular expression for matching valid domain names. This regex seeks to support all
domains with TLDs listed on
[publicsuffix.org](https://publicsuffix.org/list/effective_tld_names.dat) including
[IDNs](http://en.wikipedia.org/wiki/Internationalized_domain_name).

In the near future this will be likely moved to <https://github.com/regexps>.

## Installation

```
npm i --save domain-regex
```

## Usage

```javascript
var domain = require('domain-regex');

domain().test('example.aerodrome.aero') // => true
domain().test('a.sub.domain.org')       // => true
domain().test('invalid_domain')         // => false
```

### IDN Support

This regex requires any Unicode character to be converted to its ASCII equivalent. This can be done
with a library like [punycode.js](https://github.com/bestiejs/punycode.js).

```javascript
var domainRegex = require('domain-regex');
var punyCode = require('punycode');

domainRegex().test(punycode.toASCII('岡山.jp')) // => true
```

## Acknowledgements

* Regex adapted from <https://www.safaribooksonline.com/library/view/regular-expressions-cookbook/9781449327453/ch08s15.html>.

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by [John Otander](http://johnotander.com).
