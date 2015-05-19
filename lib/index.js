beforeEach(function () {
	jasmine.addMatchers({
		toHaveMethod: function () {
			return {
				compare: function(actual, functionName) {
					var result = {};

					if (!actual.hasOwnProperty(functionName) || typeof actual[functionName] !== 'function') {
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
				compare: function(actual) {
					var result = {},
						functionNames = Array.prototype.slice.call(arguments, 1);

					for (var index = functionNames.length - 1; index >= 0; index--) {
						var functionName = functionNames[index];
						if (!actual.hasOwnProperty(functionName) || typeof actual[functionName] !== 'function') {
							result.pass = false;
							result.message = 'Expected ' + actual + ' to have method ' + functionNames;
							return result;
						}
					}

					result.pass = true;

					return result;
				}
			};
		}
	});
});

