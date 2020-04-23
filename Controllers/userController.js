const User = require('../Models/userModel');

const getAllUsers = (req, res) => {
    User.find({}).then(user => {
        res.status(200).json(user);
    });
};

const getUserByEmailPassword = (req, res) => {
    User.findOne({$and:[{email: req.params.email},{password: req.params.password}]}).then(user => {
        if(!user){
            res.status(401).json({msg: 'no account exists'})
        }
        else{res.status(200).json(user)};
    }).catch(error =>{
        res.status(401).json(error)
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
    getUserByEmailPassword
};
