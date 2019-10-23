
const mongoose = require("mongoose");

const { ContentSchema } = require('./schema.js');
const { TableSchema } = require('./schema.js');

const ContentSchemaModel = mongoose.model("ContentSchemaModelName", ContentSchema);
const TableSchemaModel = mongoose.model('Table', TableSchema);

module.exports = { ContentSchemaModel, TableSchemaModel };
