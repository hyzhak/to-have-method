# toHaveMethod [![npm](https://img.shields.io/npm/v/to-have-method.svg)](https://www.npmjs.com/package/to-have-method) [![Build Status](https://travis-ci.org/hyzhak/to-have-method.svg?branch=master)](https://travis-ci.org/hyzhak/to-have-method)

toHaveMethod matcher for Jasmine (http://jasmine.github.io/) to check whether object has method or not.

## Installation

```
npm install to-have-property --save-dev
```

## How to use

```javascript
require('to-have-method');

it('should have method', function() {
    expect({ m: function() {} }).toHaveMethod('m');
});

it('should have methods', function() {
    expect({ m1: function() {}, m2: function() {} }).toHaveMethods('m1', 'm2');
});

```

## More
[others Jasmine matchers and extensions](http://hyzhak.github.io/jasmine-extensions/)
