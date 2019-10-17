// External Dependencies
const boom = require('boom')

// Get Data Models
const Table = require('./sethernetTableModel.js')

// Get all tables
exports.getTables = async (req, reply) => {
    console.log('router.get(\'/api/tables\', sethernetTableController.getTables);');
    console.log(req.body);
    try {
        const tables = await Table.find()
        console.log(tables);
        reply.send(tables)
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Get single table by ID
exports.getSingleTable = async (req, reply) => {
    console.log('router.get(\'/api/tables\', sethernetTableController.getSingleTable);');
    console.log(req.body);
    try {
        const id = req.params.id
        const table = await Table.findById(id)
        reply.send(table)
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Add a new table
exports.addTable = async (req, reply) => {
    try {
        const table = new Table(req.body)
        table.save()
        reply.send(table)
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Update an existing table
exports.updateTable = async (req, reply) => {
    try {
        const id = req.params.id
        const table = req.body
        const { ...updateData } = table
        const update = await Table.findByIdAndUpdate(id, updateData, { new: true })
        reply.send(update)
    } catch (err) {
        throw boom.boomify(err)
    }
}

// Delete a table
exports.deleteTable = async (req, reply) => {
    try {
        const id = req.params.id
        const table = await Table.findByIdAndRemove(id)
        reply.send(table)
    } catch (err) {
        throw boom.boomify(err)
    }
}