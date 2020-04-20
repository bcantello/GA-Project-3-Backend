const mongoose = require('../DataBase/connection');
const UserSchema = mongoose.Schema({
   
    name: String,
    email: {
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true
    },
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
