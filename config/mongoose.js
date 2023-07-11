
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://singhrau:hD8zKtB8SNk5tCrX@cluster0.plmi4zp.mongodb.net/?retryWrites=true&w=majority');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'error in connectin DB'));

db.once('open', () => {
    console.log('Succesfully !! Connected to the DataBase');
})
module.export = db;


