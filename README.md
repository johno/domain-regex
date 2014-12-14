# Domain Regex

[![Build Status](https://travis-ci.org/johnotander/domain-regex.svg?branch=master)](https://travis-ci.org/johnotander/domain-regex)

A regular expression for matching valid domain names. This regex seeks to support all
domains with TLDs listed on
[publicsuffix.org](https://publicsuffix.org/list/effective_tld_names.dat) including
[IDNs](http://en.wikipedia.org/wiki/Internationalized_domain_name).

It currently works for most non-IDNs, IDN support is a work in progress.

In the near future this will be likely moved to <https://github.com/regexps>.

## Installation

```
npm i --save domain-regex
```

## Usage

```javascript
var domain = require('domain-regex');

domain().test('example.aerodrome.aero') // => true
domain().test('a.sub.domain.org')        // => true
domain().test('invalid_domain')          // => false
```

## Acknowledgements

* Regex adapted from <http://stackoverflow.com/questions/10306690/domain-name-validation-with-regex>.

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by [John Otander](http://johnotander.com).
