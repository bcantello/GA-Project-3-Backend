const User = require('../Models/userModel');

const getAllUsers = (req, res) => {
    User.find({}).then(user => {
        res.status(200).json({
            status: "ok",
            user
        })
    })
};

const getUserById = (req, res) => {
    User.findOne({_id: req.params.id}).then((user) => {
        res.json(user)
    })
};

const getUsersByName = (req, res) => {
    User.findOne({"FirstName": req.params.Name}).then(user => {
      res.status(200).json({
          status: "ok",
          user
        })  
    })
};

const createUser = (req, res) => {
    const body = req.body
    User.create(body).then(user => {
        User.find({}).then((users) => {
            res.status(200).json({
                status: "ok",
                users
            })
        })
    })
};

const updateUser = (req, res) => {
    const body = req.body
    User.findOneAndUpdate({_id: req.params.id}, body).then((user => {
        User.find({}).then((users) => {
            res.status(200).json({
                status: "ok",
                msg: `Updated ${user.id}: ${user.name}`,
                users
            })
        })
    }))
};

const deleteUser = (req, res) =>{
    User.findOneAndDelete({_id: req.params.id}).then((user) => {
        User.find({}).then((users) => {
            res.status(200).json({
                status: "ok",
                msg: `Deleted ${user.id}: ${user.name}`,
                users
            })
        })
    })
};

module.exports = {
    getAllUsers,
    getUserById,
    getUsersByName,
    createUser,
    updateUser,
    deleteUser
};


