
const expect = require('chai').expect;
const describe = require('mocha').describe;
const it = require('mocha').it;
const _ = require('lodash');
const supertest = require('supertest');
const {server,shutdown} = require('../index');

describe('API Tests: ', () => {
    after(function () {
        shutdown();
    });

    it('Can GET fortune', async function(){
        //Go get all the lists
        supertest(server)
            .get('/')
            .set('Accept', 'application/json')
            .then((res) => {
                expect(res.body).to.be.an('object');
                expect(res.body.fortune).to.be.a('string');
            })

    });

});
