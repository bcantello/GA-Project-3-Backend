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
            // console.log("taylor from pet: ", taylor);
            taylor.pet.push(pet.id); //or Pets
            taylor.save();
            console.log("created taylor: beckett", taylor);
          })
        }).then((taylor) => {
          console.log("taylor from appointments: ", taylor);
          Appointment.create({
            date: "2020-04-25",
            time: "10:30",
            service: "Groom",
            petName: Pet.name,
            comments:
                "Please don't knock, text me when you are here - he barks a lot when someone knocks!",
            user_id: taylor.id
          }).then((appointment) => {
            taylor.appointment.push(appointment.id);
            taylor.save();
          });
        });

        // .then((provider) => {

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





      })
    })
  })
})
      //
      //       .then((billie) => {
      //         console.log("Billie created", billie)
      //         Appointment.create({
      //           date: "2020-04-25",
      //           time: "10:30",
      //           service: "Groom",
      //           petName: Pet.name,
      //           comments:
      //               "Please don't knock, text me when you are here - he barks a lot when someone knocks!",
      //           user_id: taylor.id,
      //           provider_id: billie.id
      //         }).then((appointment) => {
      //           billie.appointment.push(appointment.id); //or Pets
      //           billie.save();
      //         }).then(() => {
      //           process.exit();
      //         });
      //       });
      // });
//     });
//   });
// })
// })
// })
