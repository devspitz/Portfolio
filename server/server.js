const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3001;
const path = require('path');

app.use(cors());
app.use(express.static(path.join(__dirname, 'client/build')));

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb+srv://admin:Aim1@cluster0.so942lo.mongodb.net/contacts', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB', error);
    });

// Define the schema and model
const formSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true }
});

const Contact = mongoose.model('Contact', formSchema);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/contact', async (req, res) => {
    try {
        const contact = new Contact(req.body);
        const savedContact = await contact.save();
        const fullContact = await Contact.findById(savedContact._id).lean();
        console.log(fullContact);
        res.json(savedContact);
    } catch (error) {
        console.error(error); // Log the entire error object
        res.status(500).json({ error: error.message });
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
