//imports
const express = require('express');
const router = require('./router');

//use express
const app = express();

//use routes
app.use('/horoscopes', router);

app.listen(8080, ()=>{
    console.log('**SERVER READY**');
})