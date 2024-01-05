const express = require('express');
const app = express();
const port = 5000

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://emptycanmail01:nodejsPw01@boilerplate.3vftseu.mongodb.net/?retryWrites=true&w=majority', {
  //useNewUrlParser:true
}).then(()=>console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}`))

