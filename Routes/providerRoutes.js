const express = require("express");
const router = express.Router();

const controller = require('../Controllers/providerController')

router.get('/', controller.getAllProviders)

router.get('/:id', controller.getProviderById)

router.post('/', controller.createProvider)

router.put('/:id', controller.updateProvider)

router.delete('/:id', controller.deleteProvider)

module.exports = router;

