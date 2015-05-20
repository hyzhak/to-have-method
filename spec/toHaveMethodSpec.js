require('../index');

describe('toHaveMethod matcher', function() {
	it('should be defined in Expectation', function() {
		expect( expect().toHaveMethod).toBeDefined();
	});

	it('should be function in Expectation', function() {
		expect( typeof expect().toHaveMethod ).toEqual('function');
	});

	it('should not apply pure property', function() {
		expect({ x: 10 }).not.toHaveMethod('x');
	});

	it('should check whether is function', function() {
		expect({ m: function() {}}).toHaveMethod('m');
	});

	it('should check whether is function', function() {
		expect(null).not.toHaveMethod('m');
	});
});