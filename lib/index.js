beforeEach(function () {
    jasmine.addMatchers({
        toHaveMethod: function () {
            return {
                compare: function (actual, functionName) {
                    var result = {};

                    if (undefineOrNull(actual) || !actual.hasOwnProperty(functionName) || typeof actual[functionName] !== 'function') {
                        result.pass = false;
                        result.message = 'Expected ' + actual + ' to have method ' + functionName;
                        return result;
                    }

                    result.pass = true;

                    return result;
                }
            };
        },
        toHaveMethods: function () {
            return {
                compare: function (actual) {
                    var result = {},
                        functionNames = Array.prototype.slice.call(arguments, 1);

                    for (var index = functionNames.length - 1; index >= 0; index--) {
                        var name = functionNames[index];
                        if (undefineOrNull(actual) || !actual.hasOwnProperty(name) || typeof actual[name] !== 'function') {
                            result.pass = false;
                            result.message = 'Expected ' + actual + ' to have methods ' + functionNames.join(', ');
                            return result;
                        }
                    }

                    result.pass = true;

                    return result;
                }
            };
        }
    });

    function undefineOrNull(obj) {
        return obj === null || obj === void 0;
    }
});

