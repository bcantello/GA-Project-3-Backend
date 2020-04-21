const mongoose = require('../DataBase/connection');

const ProviderSchema = new mongoose.Schema({
    
    name: String,
    zip: Number,
    reviews: Number,
    stars: Number,
    services: [
        {
            walk: Boolean,
            groom: Boolean,
            sit: Boolean
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
