const mongoose = require('mongoose');

const expensesSchema = mongoose.Schema({
    id:{
        type: Number,
        required: true,
        index: {unique: true}
    },  
    name: String,
    amount: Number,
    date: {
        type: Date,
        default: Date.now
    },
    deleted: {
        type: String,
        default: 'false'
    },
    category: String
})

module.exports = mongoose.model('Expenses', expensesSchema);
