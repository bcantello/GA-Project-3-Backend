const mongoose = require("mongoose");
const User = require("../Models/userModel");
const Provider = require("../Models/providerModel");
const Appointment = require("../Models/appointmentModel");
const Pet = require("../Models/petModel");

User.deleteMany({}).then(() => {
  console.log("deleted all users");
  Pet.deleteMany({}).then(() => {
    console.log("deleted all pets");
    Provider.deleteMany({}).then(() => {
      console.log("deleted all providers");
      Appointment.deleteMany({}).then(() => {
        console.log("deleted all appointments");

        User.create({
          name: "Taylor Demo",
          email: "taylor@demo.com",
          password: "demo",
          zip: 94120
        }).then((taylor) => {
          console.log("Taylor Demo created", taylor);
          Pet.create({
            name: "Beckett",
            user_id: taylor.id,
            age: 2,
            breed: "Bernedoodle"
          }).then((pet) => {
            taylor.pet.push(pet.id);
            console.log("created taylor: beckett", taylor);
          }).then(() => {
            console.log("What is taylor here?", taylor);
            Appointment.create({
              date: "2020-05-25",
              time: "10:30",
              service: "Groom",
              petID: taylor.pet[0],
              comments:
                  "Please don't knock, text me when you are here - he barks a lot when someone knocks!",
              user_id: taylor._id,
              // provider_id: ""
            }).then((appointment) => {
              console.log("created appointment", appointment);
              taylor.appointment.push(appointment.id);
              taylor.save();
            })
          });
        });

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
        }).then((provider) => {
          console.log("created provider", provider)
        });
      });
    });
  });
});
