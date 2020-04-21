const Appointment = require('../Models/appointmentModel');

const getAppointments = (req, res) => {
    Appointment.find({}).then(appointment => {
        res.status(200).json(appointment);
    });
};

const getAppointmentsById = (req, res) => {
    Appointment.findOne({_id: req.params.id}, req.body).then(appointment => {
        res.status(200).json(appointment);
    });
};

const createAppointment = (req, res) => {
    Appointment.create(req.body).then(appointment => {
        res.status(200).json(appointment);
    });
};

const updateAppointment = (req, res) => {
    Appointment.findOneAndUpdate({_id: req.params.id}, req.body).then(appointment => {
        res.status(200).json(appointment);
    });
};

const deleteAppointment = (req, res) => {
    Appointment.delete({_id: req.params.id}).then(appointment => {
        res.status(200).json(appointment);
    });
};

module.exports = {
    getAppointments,
    getAppointmentsById,
    createAppointment,
    updateAppointment,
    deleteAppointment
};
