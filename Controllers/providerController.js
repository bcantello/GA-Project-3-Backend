const Provider = require('../Models/providerModel');

const getAllProviders = (req, res) => {
    Provider.find({}).then(provider => {
        res.status(200).json(provider);
    });
};

const getProviderById = (req, res) => {
    Provider.findOne({_id: req.params.id}).then((provider) => {
        res.status(200).json(provider);
    });
};

const getProviderByName = (req, res) => {
    Provider.findOne({"name": req.params.name}).then(provider => {
        res.status(200).json(provider);
    });
};

const createProvider = (req, res) => {
    Provider.create(req.body).then(provider => {
        res.status(200).json(provider);
    });
};

const updateProvider = (req, res) => {
    Provider.findOneAndUpdate({_id: req.params.id}, req.body).then(provider => {
        res.status(200).json(provider)
    });
};

const deleteProvider = (req, res) =>{
    Provider.findOneAndDelete({_id: req.params.id}).then((provider) => {
        res.status(200).json(provider);
    });
};

module.exports = {
    getAllProviders,
    getProviderById,
    getProviderByName,
    createProvider,
    updateProvider,
    deleteProvider
};


