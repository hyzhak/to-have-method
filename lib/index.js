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
		}
	});
});

