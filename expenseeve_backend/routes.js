const express = require('express');
const router = express.Router();
const Setting = require('./models/settings');
const Expense = require('./models/expenses');

router.use(express.json())

// router.all('/*', (req, res, next) => {
//     console.log(req.body);
//     next();
// })

router.post('/createUser', async (req, res) => {
    const newSetting = new Setting ({
        username: "Aditya",
        budget: 15000,
        categories: ['Bills','Groceries']
    });
    try {
        const savedSetting = await newSetting.save();
        res.json(savedSetting);
    }
    catch (err) {
        res.send({message: err})
    }
})

router.get('/getExpenses', async (req, res) => {
    try {
        const expenses = await Expense.find();
        res.json(expenses);
    }
    catch (err) {
        res.json({ message: err })
    }
})

router.get('/getSettings', async (req, res) => {
    try {
        const settings = await Setting.find();
        res.json(settings);
    }
    catch (err) {
        res.json({ message: err })
    }
})

router.post('/updateBudget', async (req, res) => {
    try { 
        const savedSettings = await Setting.updateOne(
         { username : 'Aditya' },
         { $set: { budget: req.body.budget } }
     )
     res.send(savedSettings)
     }
     catch (err) {
         res.json({message : err})
     }
})

router.post('/addCategory', async (req, res) => {
    try { 
       const savedSettings = await Setting.updateOne(
        { username : 'Aditya' },
        { $push: { categories: req.body.category } }
    )
    res.send(savedSettings)
    }
    catch (err) {
        res.json({message : err})
    }
})

router.post('/deleteCategory', async (req, res) => {
    try { 
       const savedSettings = await Setting.updateOne(
        { username : 'Aditya' },
        { $pull: { categories: req.body.category } }
    )
    res.send(savedSettings)

    }
    catch (err) {
        res.json({message : err})
    }
})

router.post('/addExpense', async (req, res) => {
    const newExpense = new Expense({
        name: req.body.name,
        amount: req.body.amount,
        date: req.body.date,
        deleted: req.body.deleted,
        category: req.body.category
    });
    
    try {
        let savedExpense;
        if (Object.keys(req.body).includes('id')) {
            savedExpense = await Expense.updateOne(
                { id: req.body.id }, 
                { $set: {
                    name: newExpense.name, 
                    amount: newExpense.amount,
                    date: newExpense.date,
                    deleted: newExpense.deleted,
                    category: newExpense.category
                }}
            );
        }
        else {
            newExpense.id = new Date().getUTCMilliseconds();
            savedExpense = await newExpense.save();
        }
        res.json(savedExpense);
    }
    catch (err) {
        res.json({ message: err.body});
    }
})

router.post ('/deleteExpense', async (req, res) => {
    const id = req.body.id;
    try {
        const deletedExpense = await Expense.deleteOne({id: id});
        res.json(deletedExpense);
    }
    catch (err) {
        res.json({message: err});
    }
})

router.post ('/softDeleteExpense', async (req, res) => {
    const id = req.body.id;
    try {
        const find = await Expense.findOne({id: id});
        const deleted = find.deleted === 'true' ? 'false' : 'true'
        const deletedExpense = await Expense.updateOne({id: id}, {deleted:deleted});
        res.json(deletedExpense);
    }
    catch (err) {
        res.json({message: err});
    }
})

router.get('/', (req, res) => {
    res.send('Hello World!')
})

module.exports = router;