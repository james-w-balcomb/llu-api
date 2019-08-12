
// Import Mongoose
const mongoose = require('mongoose');
// TODO(JamesBalcomb): figure how to not need mongoose import for mongoose.Types.ObjectId(req.params.documentId)
// TODO(JamesBalcomb): figure out how to make 'documentId' not be "Unresolved variable..."

const ContentSchemaModel = require('./models.js');

// (C) Create
exports.createDocument = (req, res) => {
    console.log("createDocument");

    console.log(req.body);

    // Validate Request Form-Data
    if(!req.body.contentContent) {
        return res.status(400).send({
            message: "Form-Data can not be empty"
        });
    }

    // Create a Document
    const contentFormDataBody = new ContentSchemaModel(req.body);

    // Save Document in the database
    contentFormDataBody.save()
        .then(data => {res.send(data);})
        .catch(err => {res.status(500).send({message: err.message || "An Unknown Error occurred while creating the Document."});});
};
// (R) Retrieve
// TODO(JamesBalcomb): add filter for 'isDeleted' "...{ isDeleted: 'FALSE' }..."
exports.retrieveAllDocuments = (req, res) => {
    console.log('retrieveAllDocuments');
    console.log(req.body);
    ContentSchemaModel.find()
        .then(documents => {res.send(documents);})
        .catch(err => {res.status(500).send({message: err.message || "An Unknown Error occurred while retrieving Documents."});});
};
exports.retrieveOneDocument = (req, res) => {
    console.log("retrieveOneDocument");
    console.log(req.body);
    let documentId = req.params.documentId;
    let _id = mongoose.Types.ObjectId(req.params.documentId);
    console.log(_id);
    // ContentSchemaModel.findById(req.params.documentId)
    ContentSchemaModel.findById(documentId)
        .then(note => {
            if(!note) {
                return res.status(404).send({
                    message: "Document not found with ID: " + req.params.documentId
                });
            }
            res.send(note);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Document not found with id " + req.params.documentId
            });
        }
        return res.status(500).send({
            message: "Error retrieving Document with id " + req.params.documentId
        });
    });
};
// (U) Update
exports.updateDocument = (req, res) => {
    console.log("updateDocument");
    console.log(req.body);
    // Find note and update it with the request body
    ContentSchemaModel.findByIdAndUpdate(req.params.documentId, {
        contentPageTitle: req.body.contentPageTitle || "Untitled Document",
        contentContent: req.body.contentContent
    }, {new: true})
        .then(note => {
            if(!note) {
                return res.status(404).send({
                    message: "Document not found with ID: " + req.params.documentId
                });
            }
            res.send(note);
        }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Document not found with ID: " + req.params.documentId
            });
        }
        return res.status(500).send({
            message: "Error updating Document with ID: " + req.params.documentId
        });
    });
};
// (D) Delete
exports.deleteDocument = (req, res) => {
    console.log("updateDocument");
    console.log(req.body);

    ContentSchemaModel.findByIdAndRemove(req.params.documentId)
        .then(note => {
            if(!note) {
                return res.status(404).send({
                    message: "Document not found with ID " + req.params.documentId
                });
            }
            res.send({message: "Document deleted successfully!"});
        }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Document not found with ID " + req.params.documentId
            });
        }
        return res.status(500).send({
            message: "Could not delete Document with ID " + req.params.documentId
        });
    });
};
// Array of all MongoDB Document's ID
// TODO(JamesBalcomb): add filter for 'isDeleted' "...{ isDeleted: 'FALSE' }..."
exports.retrieveDocumentIDsList = (req, res) => {
    console.log('retrieveDocumentIDsList');
    console.log(req.body);
    ContentSchemaModel.find({ }, { _id: 1 })
        .then(documents => {res.send(documents);})
        .catch(err => {res.status(500).send({message: err.message || "An Unknown Error occurred while retrieving Contents."});});

};

// Array of all MongoDB Document's ContentPageTitle
exports.retrieveContentPageTitleList = (req, res) => {
    console.log('retrieveContentPagePathList');
    console.log(req.body);
    ContentSchemaModel.find({ }, { _id: 0, contentPageTitle: 1 })
        .then(documents => {res.send(documents);})
        .catch(err => {res.status(500).send({message: err.message || "An Unknown Error occurred while retrieving Contents."});});
};

// Array of all MongoDB Document's ContentPagePath
exports.retrieveContentPagePathList = (req, res) => {
    console.log('retrieveContentPagePathList');
    console.log(req.body);
    ContentSchemaModel.find({ }, { _id: 0, contentPagePath: 1 })
        .then(documents => {res.send(documents);})
        .catch(err => {res.status(500).send({message: err.message || "An Unknown Error occurred while retrieving Contents."});});
};

// Array of all MongoDB Document's ContentPagePath
exports.retrieveContentPagePathAndTitleList = (req, res) => {
    console.log('retrieveContentPagePathList');
    console.log(req.body);
    ContentSchemaModel.find({ }, { _id: 0, contentPagePath: 1, contentPageTitle: 1 })
        .then(documents => {res.send(documents);})
        .catch(err => {res.status(500).send({message: err.message || "An Unknown Error occurred while retrieving Contents."});});
};
