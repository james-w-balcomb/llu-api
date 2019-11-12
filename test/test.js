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

        // app.get('/', (req, res) => { res.send('hello, world') });
        describe('GET /', function() {
            it('it should return status 200', function(done) {
                chai.request(app)
                    .get('/')
                    .end(function(err, res) {
                        res.should.have.status(200);
                        done();
                    });
            });
        });

        // router.get('/contentIdList', controllers.retrieveDocumentIDsList);
        describe('GET /contentIdList', function() {
            it('it should return status 200', function(done) {
                chai.request(app)
                    .get('/contentIdList')
                    .end(function(err, res) {
                        res.should.have.status(200);done();
                    });
            });
        });

        // router.get('/contentPageTitleList', controllers.retrieveContentPageTitleList);
        describe('GET /contentPageTitleList', function() {
            it('it should return status 200', function(done) {
                chai.request(app)
                    .get('/contentPageTitleList')
                    .end(function(err, res) {
                        res.should.have.status(200);done();
                    });
            });
        });

        // router.get('/contentPagePathList', controllers.retrieveContentPagePathList);
        describe('GET /contentPagePathList', function() {
            it('it should return status 200', function(done) {
                chai.request(app)
                    .get('/contentPagePathList')
                    .end(function(err, res) {
                        res.should.have.status(200);done();
                    });
            });
        });

        // router.get('/page-path-and-title-list', controllers.retrieveContentPagePathAndTitleList);
        describe('GET /page-path-and-title-list', function() {
            it('it should return status 200', function(done) {
                chai.request(app)
                    .get('/page-path-and-title-list')
                    .end(function(err, res) {
                        res.should.have.status(200);done();
                    });
            });
        });

        // router.get('/page-path-title-description-list', controllers.retrieveContentPagePathTitleDescriptionList);
        describe('GET /page-path-title-description-list', function() {
            it('it should return status 200', function(done) {
                chai.request(app)
                    .get('/page-path-title-description-list')
                    .end(function(err, res) {
                        res.should.have.status(200);done();
                    });
            });
        });

    });

    describe("/content", function() {

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

        // router.post('/content', controllers.createDocument);
        describe('POST /content', function() {
            it('it should return status 200', function(done) {
                let contentDocument = {
                    contentPagePath: "test-post-content",
                    contentPageTitle: "Test POST /content",
                    contentContent: {}
                };
                chai.request(app)
                    .post('/content')
                    .send(contentDocument)
                    .end(function(err, res) {
                        console.log(res.error);
                        res.should.have.status(200);
                        done();
                    });
            });
            it('should return status ')
        });

        // router.get('/content', controllers.retrieveAllDocuments);
        describe('GET /content', function() {
            it('it should return status 200', function(done) {
                chai.request(app)
                    .get('/content')
                    .end(function(err, res) {
                        res.should.have.status(200);done();
                    });
            });
        });

        // router.get('/content/:documentId', controllers.retrieveOneDocument);
        describe('GET /content/:documentId', function() {
            it('it should return status 200', function(done) {
                let contentDocument = new ContentSchemaModel({
                    contentPagePath: "test-get-content-documentId",
                    contentPageTitle: "Test GET /content/:documentId",
                    contentContent: {}
                });
                contentDocument.save(function(err, contentDocument) {
                    chai.request(app)
                        .get(`/content/${contentDocument.id}`)
                        .end(function(err, res) {
                            res.should.have.status(200);done();
                        });
                });
            });
            it('it should return status 404 Document not found with ID: {_id}')
        });

        // router.get('/content/page-path/:contentPagePath', controllers.retrieveOneDocumentByPagePath);
        describe('GET /content/page-path/:contentPagePath', function() {
            it('it should return status 200', function(done) {
                let contentDocument = new ContentSchemaModel({
                    contentPagePath: "test-get-contentPagePath",
                    contentPageTitle: "Test GET /content/page-path/:contentPagePath",
                    contentContent: {}
                });
                contentDocument.save(function(err, contentDocument) {
                    chai.request(app)
                        .get(`/content/page-path/${contentDocument.contentPagePath}`)
                        .end(function(err, res) {
                            res.should.have.status(200);done();
                        });
                });
            });
            it('it should return status 404 Document not found with Page-Path: {contentPagePath}')
        });

        // router.put('/content/:documentId', controllers.updateDocument);
        describe('PUT /content/:documentId', function() {
            it('it should return status 200', function(done) {
                let contentDocument = new ContentSchemaModel({
                    contentPagePath: "test-put-content-documentId",
                    contentPageTitle: "Test PUT /content/:documentId",
                    contentContent: {}
                });
                contentDocument.save(function(err, contentDocument) {
                    let contentDocumentUpdate = {
                        contentPageTitle: "UPDATED!! Test PUT /content/:documentId"
                    };
                    chai.request(app)
                        .put(`/content/${contentDocument.id}`)
                        .send(contentDocumentUpdate)
                        .end(function(err, res) {
                            console.log(res.error);
                            res.should.have.status(200);done();
                        });
                });
            });
            it('it should return status 404 Document not found with ID: {_id}')
        });

        // router.delete('/content/:documentId', controllers.deleteDocument);
        describe('DELETE /content/:documentId', function() {
            it('it should return status 200', function(done) {
                let contentDocument = new ContentSchemaModel({
                    contentPagePath: "test-delete-content-documentId",
                    contentPageTitle: "DELETE /content/:documentId",
                    contentContent: {}
                });
                contentDocument.save(function(err, contentDocument) {
                    chai.request(app)
                        .delete(`/content/${contentDocument.id}`)
                        .end(function(err, res) {
                            console.log(res.error);
                            res.should.have.status(200);done();
                        });
                });
            });
            it('it should return status 404 Document not found with ID: {_id}')
        });

    });

    describe("/api/tables", function() {

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

        // router.get('/api/tables', controllers.getTables);
        describe('GET /api/tables', function() {
            it('it should return status 200', function(done) {
                chai.request(app)
                    .get('/api/tables')
                    .end(function(err, res) {
                        res.should.have.status(200);done();
                    });
            });
        });

        // router.get('/api/tables/:id', controllers.getSingleTable);
        describe('GET /api/tables/:id', function() {
            it('it should return status 200', function(done) {
                let tableDocument = new TableSchemaModel({
                    title: "Test GET /api/tables/:id",
                    description: "",
                    content: []
                });
                tableDocument.save(function(err, tableDocument) {
                    chai.request(app)
                        .get(`/api/tables/${tableDocument.id}`)
                        .end(function(err, res) {
                            res.should.have.status(200);done();
                        });
                });
            });
            it('it should return status 404 Document not found with ID: {_id}')
        });

        // router.post('/api/tables', controllers.addTable);
        describe('POST /api/tables', function() {
            let table = {
                title: "Test POST /api/tables",
                description: "",
                content: []
            };
            it('it should return status 200', function(done) {
                chai.request(app)
                    .post('/api/tables')
                    .send(table)
                    .end(function(err, res) {
                        console.log(res.error);
                        res.should.have.status(200);done();
                    });
            });
        });

        // router.put('/api/tables/:id', controllers.updateTable);
        describe('PUT /api/tables/:id', function() {
            it('it should return status 200', function(done) {
                let tableDocument = new TableSchemaModel({
                    title: "Test PUT /api/tables/:id",
                    description: "",
                    content: []
                });
                tableDocument.save(function(err, tableDocument) {
                    let tableDocumentUpdate = {
                        description: "UPDATED!!",
                    };
                    chai.request(app)
                        .put(`/api/tables/${tableDocument.id}`)
                        .send(tableDocumentUpdate)
                        .end(function(err, res) {
                            console.log(res.error);
                            res.should.have.status(200);done();
                        });
                });
            });
            it('it should return status 404 Document not found with ID: {_id}')
        });

        // router.delete('/api/tables/:id', controllers.deleteTable);
        describe('DELETE /api/tables/:id', function() {
            it('it should return status 200', function(done) {
                let tableDocument = new TableSchemaModel({
                    title: "Test DELETE /api/tables/:id",
                    description: "",
                    content: []
                });
                tableDocument.save(function(err, tableDocument) {
                    chai.request(app)
                        .delete(`/api/tables/${tableDocument.id}`)
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
