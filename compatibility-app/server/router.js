//imports
const express = require('express');
const data = require('./data/Data');

//Setting Router
const router = express.Router();

//get data
router.get('/', (req, res) =>{
    res.send(data);
})

module.exports = router;