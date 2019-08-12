
const controllers = require('./controllers.js');

// Initialize express router
let router = require('express').Router();

// (C) Create
router.post('/content', controllers.createDocument);
// (R) Retrieve
// Retrieve ALL Documents
router.get('/content', controllers.retrieveAllDocuments);
// Retrieve ONE Documents
router.get('/content/:documentId', controllers.retrieveOneDocument);
// (U) Update
router.put('/content/:documentId', controllers.updateDocument);
// (D) Delete
router.delete('/content/:documentId', controllers.deleteDocument);

// Retrieve ALL Document's ID
router.get('/contentIdList', controllers.retrieveDocumentIDsList);
// Retrieve ALL Document's contentPageTitleList
router.get('/contentPageTitleList', controllers.retrieveContentPageTitleList);
// Retrieve ALL Document's contentPagePathList
router.get('/contentPagePathList', controllers.retrieveContentPagePathList);
// Retrieve ALL Document's contentPagePath and contentPageTitle
router.get('/page-path-and-title-list', controllers.retrieveContentPagePathAndTitleList);

// Export API routes
module.exports = router;
