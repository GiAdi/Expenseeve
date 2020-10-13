const mongoose = require('mongoose');

const expensesSchema = mongoose.Schema({
    id:{
        type: Number,
        required: true,
        index: {unique: true}
    },  
    name: {
        type: String,
        default: 'Unnamed Expense'
    },
    amount: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    },
    deleted: {
        type: String,
        default: 'false'
    },
    category: {
        type: String,
        default: 'Others'
    }
})

module.exports = mongoose.model('Expenses', expensesSchema);
