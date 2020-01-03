const express = require('express');
const data = require('./data/Data');

const router = express.Router();

router.get('/', (req, res) => {
    res.send(data);
})

module.exports = router;