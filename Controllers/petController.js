const Pet = require('../Models/petModel');

const getPetById = (req, res) => {
    Pet.findOne({_id: req.params.id}, req.body).then(pet => {
        res.status(200).json(pet);
    });
};

const getAllPets = (req, res) => {
    Pet.find({}).then(pets => {
        res.status(200).json(pets);
    });
};

const getAllByAccountId = (req, res) => {
    Pet.find({user_id: req.params.id}).then((pets) => {
        res.status(200).json(pets);
    });
}

const createPet = (req, res) => {
    Pet.create(req.body).then(pet => {
        res.status(200).json(pet);
    });
};

const updatePet = (req, res) => {
    Pet.findOneAndUpdate({_id: req.params.id}, req.body).then(pet => {
        res.status(200).json(pet);
    });
};

const deletePet = (req, res) => {
    Pet.delete({_id: req.params.id}).then(pet => {
        res.status(200).json(pet);
    });
};

module.exports = {
    getPetById,
    createPet,
    updatePet,
    deletePet,
    getAllPets,
    getAllByAccountId
};
