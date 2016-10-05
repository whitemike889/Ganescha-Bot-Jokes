describe('dataTypeCheck.js Test', function () {  'use strict';
	const assert = require('assert');
    
	describe('function Test', function () {
        const jokes = require('../index.js');
        
        jokes.forEach(function (elem) {
        	it(elem + ' should be string', function () {
                assert.equal('string', typeof elem);
                assert.equal(true, elem.length <= 124);
        	});
        });
	});
    
	describe('Size Test', function () {
        const jokes = require('../index.js');

    	it('More than ' + jokes.length + ' jokes', function () {
            assert.equal(true, jokes.length >= 100);
    	});
	});
});
