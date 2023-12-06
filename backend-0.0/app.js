const express = require('express');
const mongoose = require('mongoose');
const contacts = require('./routes/contacts');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/contactsdb');

const app = express();

app.use('/contacts', contacts);

app.listen(3000);
