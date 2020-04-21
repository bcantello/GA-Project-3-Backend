const mongoose = require("mongoose");
const User = require("../Models/userModel");
const Provider = require("../Models/providerModel");
const Appointment = require("../Models/appointmentModel");
const Pet = require("../Models/petModel");

User.deleteMany({}).then(() => {
  Pet.deleteMany({}).then(() => {
    Provider.deleteMany({}).then(() => {
      Appointment.deleteMany({}).then(() => {
        User.create({
          name: "Taylor Demo",
          email: "taylor@demo.com",
          password: "demo",
          zip: 94120
        }).then((taylor) => {
          Pet.create({
            name: "Beckett",
            user_id: taylor._id,
            age: 2,
            breed: "Bernedoodle"
          }).then((pet) => {
            taylor.pet.push(pet._id);
          }).then(() => {
            Appointment.create({
              date: "2020-05-25",
              time: "10:30",
              service: "Groom",
              petID: taylor.pet[0],
              comments:
                  "Please don't knock, text me when you are here - he barks a lot when someone knocks!",
              user_id: taylor._id,
            }).then((appointment) => {
              taylor.appointment.push(appointment._id);
              taylor.save();
            }).then(() => {
              Provider.create({
                name: "Billie",
                reviews: 471,
                stars: 5,
                services: [
                  {
                    walk: true,
                    groom: true,
                    sit: false
                  }
                ]
              }).then(() => {
                process.exit();
              });
            });
          });
        });
      });
    });
  });
});
