
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
// Retrieve ONE Document by Page-Path
router.get('/content/page-path/:contentPagePath', controllers.retrieveOneDocumentByPagePath);
// (U) Update
router.put('/content/:documentId', controllers.updateDocument);
// (D) Delete
router.delete('/content/:documentId', controllers.deleteDocument);

// Retrieve ALL Document's ID
router.get('/content-id-list', controllers.retrieveDocumentIDsList);
// Retrieve ALL Document's contentPageTitleList
router.get('/content-page-title-list', controllers.retrieveContentPageTitleList);
// Retrieve ALL Document's contentPagePathList
router.get('/content-page-path-list', controllers.retrieveContentPagePathList);
// Retrieve ALL Document's contentPagePath and contentPageTitle
router.get('/page-path-and-title-list', controllers.retrieveContentPagePathAndTitleList);
// Retrieve ALL Document's contentPagePath, contentPageTitle, and contentPageDescription
router.get('/page-path-title-description-list', controllers.retrieveContentPagePathTitleDescriptionList);

router.get('/tables', controllers.getTables);
router.get('/tables/:id', controllers.getSingleTable);
router.post('/tables', controllers.addTable);
router.put('/tables/:id', controllers.updateTable);
router.delete('/tables/:id', controllers.deleteTable);

// Export API routes
module.exports = router;
