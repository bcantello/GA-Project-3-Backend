const express = require("express");
const router = express.Router();

const controller = require('../Controllers/userController');

router.get('/', controller.getAllUsers);

router.get('/:name', controller.getUsersByName);

router.post('/', controller.createUser);

router.put('/:id', controller.updateUser);

router.delete('/:id', controller.deleteUser);

module.exports = router;
