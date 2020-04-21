const Provider = require('../Models/providerModel');

const getAllProviders = (req, res) => {
    Provider.find({}).then(provider => {
        res.status(200).json({
            status: "ok",
            provider
        })
    })
};

const getProviderById = (req, res) => {
    Provider.findOne({_id: req.params.id}).then((provider) => {
        res.json(provider)
    })
};

const getProviderByName = (req, res) => {
    Provider.findOne({"name": req.params.name}).then(provider => {
      res.status(200).json({
          status: "ok",
          provider
        })  
    })
};

const createProvider = (req, res) => {
    Provider.create(req.body).then(provider => {
        res.status(200).json({
            status: "ok",
            provider
        })
    })
};

const updateProvider = (req, res) => {
    Provider.findOneAndUpdate({_id: req.params.id}, req.body).then((provider => {
        Provider.find({}).then((providers) => {
            res.status(200).json({
                status: "ok",
                msg: `Updated ${provider.id}: ${provider.name}`,
                providers
            })
        })
    }))
};

const deleteProvider = (req, res) =>{
    Provider.findOneAndDelete({_id: req.params.id}).then((provider) => {
        Provider.find({}).then((providers) => {
            res.status(200).json({
                status: "ok",
                msg: `Deleted ${provider.id}: ${provider.name}`,
                providers
            })
        })
    })
};

module.exports = {
    getAllProviders,
    getProviderById,
    getProviderByName,
    createProvider,
    updateProvider,
    deleteProvider
};


