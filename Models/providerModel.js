const mongoose = require('../DataBase/connection');

const ProviderSchema = new mongoose.Schema({
    
    name: String,
    img: String,
    zip: Number,
    reviews: Number,
    stars: Number,
    services: [
        {
            walk: Boolean,
            groom: Boolean,
            overnight: Boolean
        }
    ],
    createdAtDate: 
        {
        type: Date,
        default: Date.now
        },
    updatedAtDate: 
        {
        type: Date,
        default: Date.now
        }
});

const Provider = mongoose.model('Provider', ProviderSchema);
module.exports = Provider;
