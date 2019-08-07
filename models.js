
const mongoose = require("mongoose");

const ContentSchema = require('./schema.js');

const ContentSchemaModel = mongoose.model("ContentSchemaModelName", ContentSchema);

module.exports = ContentSchemaModel;
