const chai = require('chai');
const expect = require('chai').expect;
const describe = require('mocha').describe;
const it = require('mocha').it;
const should = require('chai').should();

const {getRandomFortune} = require('../dataManager');

describe('Fortunes Tests: ', async () => {
    it('Can get fortune', function(){
        getRandomFortune()
            .then(fortune => {
                expect(fortune).to.be.an('object');
            });
    });
});
