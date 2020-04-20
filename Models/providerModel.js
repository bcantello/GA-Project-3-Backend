const mongoose = require('../DataBase/connection');

const ProviderSchema = new mongoose.Schema({
    provider:
        {
            name: String,
            reviews: Number,
            stars: Number,
            services: [
                {
                    walk: Boolean,
                    groom: Boolean,
                    sit: Boolean
                }
            ]
        }
});

Provider = mongoose.model('Provider', ProviderSchema);
module.exports = Provider;
