const mongoose = require('../DataBase/connection');
const UserSchema = mongoose.Schema({
   
    name: String,
    email: String,
    password: String,
    zip: Number,
    pet: [
        {
            ref: "Pet",
            type: mongoose.Schema.Types.ObjectId
        }
    ],
    preferredProvider: [
        {
            ref: "Provider",
            type: mongoose.Schema.Types.ObjectId
        }
    ]
})
const User = mongoose.model("User", UserSchema);
module.exports = User;
