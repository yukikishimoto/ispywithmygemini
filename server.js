const express = require('express');
const cors = require('cors');
const path = require('path');

const router = require('./router');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
}

app.use('/horoscopes', router);

if (process.env.NODE_ENV === 'production') {
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'client/build/index.html'));
    });
  }

app.listen(PORT, ()=>{
    console.log("Server started on port:", PORT);
})