const Appointment = require('../Models/appointmentModel');

const createAppointment = (req, res) => {
    Appointment.create(req.body).then(appointment => {
        res.json(appointment);
    });
};

const updateAppointment = (req, res) => {
    Appointment.findOneAndUpdate({_id: req.params.id}, req.body).then(appointment => {
        res.json(appointment);
    });
};

const deleteAppointment = (req, res) => {
    Appointment.delete({_id: req.params.id}).then(appointment => {
        res.json(appointment);
    });
};

module.exports = {
    createAppointment,
    updateAppointment,
    deleteAppointment
};
