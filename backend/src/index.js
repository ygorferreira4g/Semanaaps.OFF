const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://35243625:35243625@cluster0-hcomv.mongodb.net/aps10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);



                              



