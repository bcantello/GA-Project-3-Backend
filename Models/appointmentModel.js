const mongoose = require('../DataBase/connection');

const AppointmentSchema = new mongoose.Schema({
    dateTime: Date,
    service: String,
    petName: String,
    comments: String
});

Appointment = mongoose.model('Appointment', AppointmentSchema);
module.exports = Appointment;
