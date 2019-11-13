const chai = require('chai');
// const assert = chai.assert;    // Using Assert style
// const expect = chai.expect;    // Using Expect style
// const should = chai.should();  // Using Should style
// Pre-Native Modules Usage (as local variables)
// const { assert } = require('chai');  // Using Assert style
// const { expect } = require('chai');  // Using Expect style
const { should } = require('chai');  // Using Should style
const chaiHttp = require('chai-http');
const app = require("../app");

const { ContentSchemaModel } = require('./../models.js');
const { TableSchemaModel } = require('./../models.js');

should();  // Modifies `Object.prototype`
chai.use(chaiHttp);

// describe("First Level Description", function() {
//     before(function(done) {
//         done();
//     });
//     beforeEach(function(done) {
//         done();
//     });
//     afterEach(function(done) {
//         done();
//     });
//     after(function(done) {
//         done();
//     });
//
//     describe("Second Level Description", function() {
//         describe("Test Level Description", function() {
//             it("Test Description (e.g., it should return status 200", function(done) {
//                 chai.request(app)
//                     .get('/')
//                     .end(function(err, res) {
//                         res.should.have.status(200);
//                         done();
//                     });
//
//             })
//         })
//     })
// });

describe("API", function() {

    describe("/", function() {

        describe('GET /', function () {
            it('it should return status 200', function (done) {
                chai.request(app)
                    .get('/')
                    .end(function (err, res) {
                        res.should.have.status(200);
                        done();
                    });
            });
        });

    });

    describe("/api/v1/", function() {

        describe('GET /api/v1/content-id-list', function() {
            it('it should return status 200', function(done) {
                chai.request(app)
                    .get('/api/v1/content-id-list')
                    .end(function(err, res) {
                        res.should.have.status(200);done();
                    });
            });
        });

        describe('GET /api/v1/content-page-title-list', function() {
            it('it should return status 200', function(done) {
                chai.request(app)
                    .get('/api/v1/content-page-title-list')
                    .end(function(err, res) {
                        res.should.have.status(200);done();
                    });
            });
        });

        describe('GET /api/v1/content-page-path-list', function() {
            it('it should return status 200', function(done) {
                chai.request(app)
                    .get('/api/v1/content-page-path-list')
                    .end(function(err, res) {
                        res.should.have.status(200);done();
                    });
            });
        });

        describe('GET /api/v1/page-path-and-title-list', function() {
            it('it should return status 200', function(done) {
                chai.request(app)
                    .get('/api/v1/page-path-and-title-list')
                    .end(function(err, res) {
                        res.should.have.status(200);done();
                    });
            });
        });

        describe('GET /api/v1/page-path-title-description-list', function() {
            it('it should return status 200', function(done) {
                chai.request(app)
                    .get('/api/v1/page-path-title-description-list')
                    .end(function(err, res) {
                        res.should.have.status(200);done();
                    });
            });
        });

    });

    describe("/api/v1/content", function() {

        // Before running this test suite, empty the database
        before((done) => {
            ContentSchemaModel.remove({}, function() {
                done();
            });
        });
        // // Before running each test, empty the database
        // beforeEach((done) => {
        //     ContentSchemaModel.remove({}, function(err) {
        //         done();
        //     });
        // });

        describe('POST /api/v1/content', function() {
            it('it should return status 200', function(done) {
                let contentDocument = {
                    contentPagePath: "test-post-content",
                    contentPageTitle: "Test POST /api/v1/content",
                    contentContent: {}
                };
                chai.request(app)
                    .post('/api/v1/content')
                    .send(contentDocument)
                    .end(function(err, res) {
                        console.log(res.error);
                        res.should.have.status(200);
                        done();
                    });
            });
            it('should return status ')
        });

        describe('GET /api/v1/content', function() {
            it('it should return status 200', function(done) {
                chai.request(app)
                    .get('/api/v1/content')
                    .end(function(err, res) {
                        res.should.have.status(200);done();
                    });
            });
        });

        describe('GET /api/v1/content/:documentId', function() {
            it('it should return status 200', function(done) {
                let contentDocument = new ContentSchemaModel({
                    contentPagePath: "test-get-content-documentId",
                    contentPageTitle: "Test GET /api/v1/content/:documentId",
                    contentContent: {}
                });
                contentDocument.save(function(err, contentDocument) {
                    chai.request(app)
                        .get(`/api/v1/content/${contentDocument.id}`)
                        .end(function(err, res) {
                            res.should.have.status(200);done();
                        });
                });
            });
            it('it should return status 404 Document not found with ID: {_id}')
        });

        describe('GET /api/v1/content/page-path/:contentPagePath', function() {
            it('it should return status 200', function(done) {
                let contentDocument = new ContentSchemaModel({
                    contentPagePath: "test-get-contentPagePath",
                    contentPageTitle: "Test GET /api/v1/content/page-path/:contentPagePath",
                    contentContent: {}
                });
                contentDocument.save(function(err, contentDocument) {
                    chai.request(app)
                        .get(`/api/v1/content/page-path/${contentDocument.contentPagePath}`)
                        .end(function(err, res) {
                            res.should.have.status(200);done();
                        });
                });
            });
            it('it should return status 404 Document not found with Page-Path: {contentPagePath}')
        });

        describe('PUT /api/v1/content/:documentId', function() {
            it('it should return status 200', function(done) {
                let contentDocument = new ContentSchemaModel({
                    contentPagePath: "test-put-content-documentId",
                    contentPageTitle: "Test PUT /api/v1/content/:documentId",
                    contentContent: {}
                });
                contentDocument.save(function(err, contentDocument) {
                    let contentDocumentUpdate = {
                        contentPageTitle: "UPDATED!! Test PUT /api/v1/content/:documentId"
                    };
                    chai.request(app)
                        .put(`/api/v1/content/${contentDocument.id}`)
                        .send(contentDocumentUpdate)
                        .end(function(err, res) {
                            console.log(res.error);
                            res.should.have.status(200);done();
                        });
                });
            });
            it('it should return status 404 Document not found with ID: {_id}')
        });

        describe('DELETE /api/v1/content/:documentId', function() {
            it('it should return status 200', function(done) {
                let contentDocument = new ContentSchemaModel({
                    contentPagePath: "test-delete-content-documentId",
                    contentPageTitle: "DELETE /api/v1/content/:documentId",
                    contentContent: {}
                });
                contentDocument.save(function(err, contentDocument) {
                    chai.request(app)
                        .delete(`/api/v1/content/${contentDocument.id}`)
                        .end(function(err, res) {
                            console.log(res.error);
                            res.should.have.status(200);done();
                        });
                });
            });
            it('it should return status 404 Document not found with ID: {_id}')
        });

    });

    describe("/api/v1/tables", function() {

        // Before running this test suite, empty the database
        before((done) => {
            TableSchemaModel.remove({}, function() {
                done();
            });
        });
        // // Before running each test, empty the database
        // beforeEach((done) => {
        //     TableSchemaModel.remove({}, function(err) {
        //         done();
        //     });
        // });

        describe('GET /api/v1/tables', function() {
            it('it should return status 200', function(done) {
                chai.request(app)
                    .get('/api/v1/tables')
                    .end(function(err, res) {
                        res.should.have.status(200);done();
                    });
            });
        });

        describe('GET /api/v1/tables/:id', function() {
            it('it should return status 200', function(done) {
                let tableDocument = new TableSchemaModel({
                    title: "Test GET /api/v1/tables/:id",
                    description: "",
                    content: []
                });
                tableDocument.save(function(err, tableDocument) {
                    chai.request(app)
                        .get(`/api/v1/tables/${tableDocument.id}`)
                        .end(function(err, res) {
                            res.should.have.status(200);done();
                        });
                });
            });
            it('it should return status 404 Document not found with ID: {_id}')
        });

        describe('POST /api/v1/tables', function() {
            let table = {
                title: "Test POST /api/v1/tables",
                description: "",
                content: []
            };
            it('it should return status 200', function(done) {
                chai.request(app)
                    .post('/api/v1/tables')
                    .send(table)
                    .end(function(err, res) {
                        console.log(res.error);
                        res.should.have.status(200);done();
                    });
            });
        });

        describe('PUT /api/v1/tables/:id', function() {
            it('it should return status 200', function(done) {
                let tableDocument = new TableSchemaModel({
                    title: "Test PUT /api/v1/tables/:id",
                    description: "",
                    content: []
                });
                tableDocument.save(function(err, tableDocument) {
                    let tableDocumentUpdate = {
                        description: "UPDATED!!",
                    };
                    chai.request(app)
                        .put(`/api/v1/tables/${tableDocument.id}`)
                        .send(tableDocumentUpdate)
                        .end(function(err, res) {
                            console.log(res.error);
                            res.should.have.status(200);done();
                        });
                });
            });
            it('it should return status 404 Document not found with ID: {_id}')
        });

        describe('DELETE /api/v1/tables/:id', function() {
            it('it should return status 200', function(done) {
                let tableDocument = new TableSchemaModel({
                    title: "Test DELETE /api/v1/tables/:id",
                    description: "",
                    content: []
                });
                tableDocument.save(function(err, tableDocument) {
                    chai.request(app)
                        .delete(`/api/v1/tables/${tableDocument.id}`)
                        .end(function(err, res) {
                            console.log(res.error);
                            res.should.have.status(200);done();
                        });
                });
            });
            it('it should return status 404 Document not found with ID: {_id}')
        });

    });

});
