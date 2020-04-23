const express = require('express');
const router = express.Router();
const petController = require('../Controllers/petController');

router.get('/:id', petController.getPetById);

router.get('/', petController.getAllPets);

router.get('/account/:id', petController.getAllByAccountId)

router.post('/', petController.createPet);

router.put('/:id', petController.updatePet);

router.delete('/:id', petController.deletePet);

module.exports = router;
