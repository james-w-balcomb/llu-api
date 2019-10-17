// External Dependencies
const mongoose = require('mongoose')

const tableSchema = new mongoose.Schema({
    title: String,
    description: String,
    content: []
})

module.exports = mongoose.model('Table', tableSchema)