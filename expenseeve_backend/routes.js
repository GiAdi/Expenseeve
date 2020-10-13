const express = require('express');

const router = express.Router();

router.all('/*', (req,res, next)=>{
    console.log("yesy");
    next();
})

router.post('/updateBudget', (req, res) => {
    res.send('okay')
})
router.post('/addCategory', (req, res) => {
    res.send('okay')
})
router.post('/deleteCategory', (req, res) => {
    res.send('okay')
})
router.post('/addExpense', (req, res) => {
    res.send('okay')
})

router.get('/', (req, res) => {
    res.send('Hello World!')
})

module.exports = router;