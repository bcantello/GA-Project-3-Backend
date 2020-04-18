const Provider = require('../Models/providerModel');

const getAllProviders = (req, res) =>{
    Provider.find({}).then(provider => {
        res.status(200).json({
            status: "ok",
            provider
        })
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

const createProvider = (req, res) =>{
    const body = req.body
    Provider.create(body).then(provider => {
        Provider.find({}).then((providers) => {
            res.status(200).json({
                status: "ok",
                msg: `Updated ${provider.id}: ${provider.name}`,
                providers
            })
        })
    })
};

const updateProvider = (req, res) =>{
    const body = req.body
    Provider.findOneAndUpdate({_id: req.params.id}, body).then((provider =>{
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
    Provider.findOneAndDelete({_id: req.params.id}).then((provider) =>{
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
    getProviderByName,
    createProvider,
    updateProvider,
    deleteProvider
};


