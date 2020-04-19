const mongoose = require('../DataBase/connection');

const PetSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String,
    comments: String
});

Pet = mongoose.model('Pet', PetSchema);
module.exports = Pet;
