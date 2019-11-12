// import {describe} from "mocha";
//
// import chai from 'chai';
// import chaiHttp from 'chai-http';
//
// // const assert = chai.assert;
// // const assert = require('assert');
//
// // import async from 'async';
//
// // const should = require('should');
//
// // const request = require('supertest');
//
// // const request = require('request');
//
// // import mongoose from 'mongoose';
// const mongoose = require('mongoose');
//
// // import app from '../app';
// const app = require('../app');
//
// // Configure chai
// chai.use(chaiHttp);
// chai.should();
//
// describe('Array', function() {
//     describe('#indexOf()', function() {
//         it('should return -1 when the value is not present', function() {
//             assert.equal([1, 2, 3].indexOf(4), -1);
//         });
//     });
// });

// describe('GET /', function () {
//     it('respond with json containing a list of all users', function (done) {
//         request(app)
//             .get('/users')
//             .set('Accept', 'application/json')
//             .expect('Content-Type', /json/)
//             .expect(200, done);
//     });
// });

//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

// Configure chai
chai.use(chaiHttp);
// chai.should();
const should = chai.should();

describe('GET /', () => {
    it('it should GET /', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});
