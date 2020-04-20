const mongoose = require('../DataBase/connection');

const PetSchema = new mongoose.Schema({
    name: String,
    user_id: [
        {
            ref: "User",
            type: mongoose.Schema.Types.ObjectId
        }
    ],
    age: Number,
    breed: String,
    comments: String
});

Pet = mongoose.model('Pet', PetSchema);
module.exports = Pet;
