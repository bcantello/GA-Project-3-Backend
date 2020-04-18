const mongoose = require('../DataBase/connection')
const UserSchema = mongoose.Schema({
   
    name: String,
    zip: Number,
    pet: [
        {
            petName: String,
            age: Number,
            breed: String
        }
    ]
})
const User = mongoose.model("User", UserSchema)
module.exports = User;
