//imports
const express = require('express');
const router = require('./router');
const cors = require('cors');

//use express
const app = express();

//use routes
app.use(cors());
app.use('/horoscopes', router);


app.listen(8080, ()=>{
    console.log('**SERVER READY**');
})