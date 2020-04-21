const User = require('../Models/userModel');

const getAllUsers = (req, res) => {
    User.find({}).then(user => {
        res.status(200).json(user);
    });
};

const getUserByEmail = (req, res) => {
    User.findOne({email: req.params.email}).then(user => {
        res.status(200).json(user);
    });
};

const getUserById = (req, res) => {
    User.findOne({_id: req.params.id}).then((user) => {
        res.status(200).json(user)
    });
};

const getUsersByName = (req, res) => {
    User.findOne({"FirstName": req.params.Name}).then(user => {
        res.status(200).json(user);
    });
};

const getUsersWithPets = (req, res) => {
    User.find({_id: req.params.id}).populate("Pet").then((users) => {
        res.status(200).json(users);
    });
};

const createUser = (req, res) => {
    User.create(req.body).then(user => {
        res.status(200).json(user);
    });
};

const updateUser = (req, res) => {
    User.findOneAndUpdate({_id: req.params.id}, req.body).then(user => {
        res.status(200).json(user);
    });
};

const deleteUser = (req, res) =>{
    User.findOneAndDelete({_id: req.params.id}).then((user) => {
        res.status(200).json(user);
    });
};

module.exports = {
    getAllUsers,
    getUserById,
    getUsersByName,
    getUsersWithPets,
    createUser,
    updateUser,
    deleteUser,
    getUserByEmail
};


