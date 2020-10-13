const mongoose = require('mongoose');

const settingsSchema = mongoose.Schema({
    username: {
        type: String,
        index: {unique: true}
    },
    budget: Number,
    categories: Array
})

module.exports = mongoose.model('Settings', settingsSchema)

