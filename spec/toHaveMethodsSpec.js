require('../index');

describe('toHaveMethods matcher', function() {
	it('should be defined in Expectation', function() {
		expect( expect().toHaveMethods).toBeDefined();
	});

	it('should be function in Expectation', function() {
		expect( typeof expect().toHaveMethods ).toEqual('function');
	});

	it('should not apply if object does not have all methods', function() {
		expect({ m1: function() {} }).not.toHaveMethods('m1', 'm2');
	});

	it('should check whether is object has methods', function() {
		expect({ m1: function() {}, m2: function() {}}).toHaveMethods('m1', 'm2');
	});

	it('should check whether is function', function() {
		expect(null).not.toHaveMethods('m');
	});
});