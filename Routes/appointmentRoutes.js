const express = require('express');
const router = express.Router();
const appointmentsController = require('../Controllers/appointmentsController');

router.post('/', appointmentsController.createAppointment);

router.put('/:id', appointmentsController.updateAppointment);

router.delete('/:id', appointmentsController.deleteAppointment);

module.exports = router;
