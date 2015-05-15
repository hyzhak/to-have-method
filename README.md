# toHaveMethod [![npm](https://img.shields.io/npm/v/to-have-method.svg)](https://www.npmjs.com/package/to-have-method) [![Build Status](https://travis-ci.org/hyzhak/to-have-method.svg?branch=master)](https://travis-ci.org/hyzhak/to-have-method)

toHaveMethod matcher for Jasmine (http://jasmine.github.io/) to wherever object has method or not.

## Installation

```
npm install to-have-property --save-dev
```

## How to use

```javascript

it('should have method', function() {
    expect({ m: function() {} }).toHaveProperty('m');
});

```
