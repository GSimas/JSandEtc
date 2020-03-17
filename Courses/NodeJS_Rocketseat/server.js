const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

//Inicializacao do App
const app = express();
app.use(cors());
app.use(express.json());

//Inicializacao do DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true});

requireDir('./src/models');

//Rota
app.use('/api', require('./src/routes'));

app.listen(3001);

