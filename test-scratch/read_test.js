// // const assert = require('assert');
// const assert = chai.assert;
//
// // Import the Mongoose Model
// const ContentSchemaModel = require('../models');
//
// let contentDocument;
//
// beforeEach(() => {
//     contentDocument = new ContentSchemaModel({  contentPageTitle: 'TestReadContent' });
//     contentDocument.save()
//         .then(() => done());
// });
//
// describe('Reading ContentDocument', () => {
//     it('finds ContentDocument with the PageTitle of TestReadContent', (done) => {
//         ContentSchemaModel.findOne({ contentPageTitle: 'TestReadContent' })
//             .then((pokemon) => {
//                 assert(poke.name === 'TestReadContent');
//                 done();
//             });
//     })
// });
