const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Use body-parser to parse form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (HTML, CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/Contact', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Define Mongoose Schema and Model for ContactUS collection
const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true }
});

const Contact = mongoose.model('ContactUS', contactSchema);

// Serve the Contact Us page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Handle form submissions
app.post('/submit-contact', async (req, res) => {
    const { name, email, message } = req.body;

    // Create a new document for ContactUS
    const newContact = new Contact({ name, email, message });

    try {
        // Save the document to MongoDB
        const savedContact = await newContact.save();
        console.log('Contact saved to MongoDB:', savedContact);
        res.status(200).send('Your message has been received. Thank you for contacting us!');
    } catch (error) {
        console.error('Error saving contact to MongoDB:', error);
        res.status(500).send('There was an error submitting the form. Please try again later.');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
