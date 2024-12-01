const mongoose = require('mongoose');

mongoose.connect('//shrutinegi23ece:UTrOXwWA8YVq1vX1@database.3uuug.mongodb.net/?retryWrites=true&w=majority&appName=database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;
