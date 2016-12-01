describe('dataTypeCheck.js Test', function () {  'use strict';
	const assert = require('assert');
    
	describe('Typeof string', function () {
        const jokes = require('../index.js');
        
        jokes.forEach(function (elem) {
        	it(elem + ' should be a string', function () {
                assert.equal(true, elem.length <= 124);
        	});
        });
	});
	
	describe('Length <= 117', function () {
        const jokes = require('../index.js');
        
        jokes.forEach(function (elem) {
        	it(elem + ' should be a string', function () {
                assert.equal(true, elem.length <= 117);
        	});
        });
	});
    
	describe('Size Test', function () {
        const jokes = require('../index.js');

    	it('More than ' + jokes.length + ' jokes', function () {
            assert.equal(true, jokes.length >= 102);
    	});
	});
});
