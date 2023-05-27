const mongoose = require('mongoose');

const NurserySchema = mongoose.Schema({
    name: { type: String },
    address: { type: String },
    latitude: { type: String },
    longitude: { type: String },
    image: {
        data: { type: Buffer },
        contentType: { type: String }
    }
})

module.exports = NurseryModel = mongoose.model('Nursery', NurserySchema)