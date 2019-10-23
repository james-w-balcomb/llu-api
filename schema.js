
const mongoose = require("mongoose");

const ContentSchema = new mongoose.Schema(
    {
            contentDocumentUuid: { type: String },
            contentPagePath: String,
            contentPageTitle: { type: String, required: true, minlength: 11, maxlength: 121 },
            contentType: String,
            contentCategory: String,
            contentKeywords: String,
            contentSearchTerms: String,
            contentTags: { type: [String], enum: [ 'test-tag-1', 'technology', 'programming', 'electronics', 'culinary-arts' ] },
            contentRelatedContent: String,
            contentDateAdded: String,
            contentDateEdited: String,
            contentDatePublished: String,
            contentDateRedacted: String,
            contentDateDeleted: String,
            contentContent: { type: String, required: true },
            contentDate: { type: Date, default: Date.now },
            isDeleted: String
    },
    {
            collection: 'contents'
    }
);

const TableSchema = new mongoose.Schema(
    {
            title: String,
            description: String,
            content: []
    },
    {
            collection: 'tables'
    }
);

module.exports = ContentSchema;
module.exports = TableSchema;
