// const should = require('should');
// const assert = require('assert');
// const request = require('request');
// const app = require('../app');
//
// describe('Contents', function () {
//
//     describe('POST content', function () {
//         it('should create a content object', function (done) {
//             let contentObject = {
//                 "contentTags": [
//                     "test-tag-1"
//                 ],
//                 "_id": "5d1364e126de5f3f08fb7888",
//                 "isDeleted": "FALSE",
//                 "contentDocumentUuid": "de1efb174c7a455598864da9da1b5f5d",
//                 "contentPagePath": "crud-test",
//                 "contentPageTitle": "CRUD Test",
//                 "contentPageDescription": "This is only a test.",
//                 "contentType": "table",
//                 "contentCategory": "computer-science",
//                 "contentKeywords": "test-keyword-1, test-keyword-2",
//                 "contentSearchTerms": "test-search-term-1, test-search-term-2",
//                 "contentRelatedContent": "test-page-path",
//                 "contentDateAdded": "2001-01-01 01:01:01",
//                 "contentDateEdited": "2001-01-01 01:01:01",
//                 "contentDatePublished": "2001-01-01 01:01:01",
//                 "contentDateRedacted": "2001-01-01 01:01:01",
//                 "contentDateDeleted": "2001-01-01 01:01:01",
//                 "contentContent": {
//                     "table": [
//                         {
//                             "Column Heading 1": "Column 1 Row 1",
//                             "Column Heading 2": "Column 2 Row 1"
//                         },
//                         {
//                             "Column Heading 1": "Column 1 Row 2",
//                             "Column Heading 2": "Column 2 Row 2"
//                         },
//                         {
//                             "Column Heading 1": "Column 1 Row 3",
//                             "Column Heading 2": "Column 2 Row 3"
//                         },
//                         {
//                             "Column Heading 1": "Column 1 Row 4",
//                             "Column Heading 2": "Column 2 Row 4"
//                         }
//                     ]
//                 },
//                 "contentDate": "2019-06-26T12:28:17.304Z",
//                 "__v": 0
//             };
//
//             request(app)
//                 .post('/content')
//                 .send(contentObject)
//                 .expect(201, done)
//         })
//         });
//
// });
