describe('dataTypeCheck.js Test', function () {  'use strict';
    const assert = require('assert');
    const maxLen = 280; // Twitter tweet
    const tweetLenghtMinusAt = maxLen - 23;
    const jokes = require('../index.js');
    
    describe('Typeof string', function () {
	it(`Every element should be a string`, () => assert.equal(true, jokes.every(e => typeof e === 'string')));
    });

   describe('Length <= 117', function () {
	jokes.forEach(function (elem) {
	   const text = `${elem} is short than ${tweetLenghtMinusAt}`;
		
	   it(text, () => assert.equal(true, elem.length <= tweetLenghtMinusAt));
	});
    });

    describe('Size Test', function () {
	it(`More than ${jokes.length} jokes`, () => assert.equal(true, jokes.length >= 127));
     });
});
