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
                        breed: "Bernedoodle",
                        comments: "Beckett LOVES to play! He’s a little shy at first, but quickly warms up to new people. If you’re grooming him, he doesn’t like his paws being touched, but won’t be aggressive about it."
                    }).then((pet) => {
                        taylor.pet.push(pet._id);
                    }).then(() => {
                        Appointment.create({
                            date: "2020-05-25",
                            time: "10:30",
                            service: "Groom",
                            petID: taylor.pet[0],
                            comments: "Please don't knock, text me when you are here - he barks a lot when someone knocks!",
                            user_id: taylor._id,
                        }).then((appointment) => {
                            taylor.appointment.push(appointment._id);
                            taylor.save();
                        }).then(() => {
                            Provider.create({
                                name: "Billie",
                                img: ('https://res.cloudinary.com/df6sigxz7/image/upload/v1587590479/pet%20service%20app/provider%20profile%20photos/billie.png'),
                                zip: 94120,
                                reviews: 471,
                                stars: 5,
                                services: [
                                    {
                                        walk: true,
                                        groom: true,
                                        sit: false
                                    }
                                ]
                            })
                            
                            Provider.create({
                                name: "Taja",
                                img: ('https://res.cloudinary.com/df6sigxz7/image/upload/v1587590480/pet%20service%20app/provider%20profile%20photos/taja.png'),
                                zip: 94120,
                                reviews: 406,
                                stars: 5,
                                services: [
                                    {
                                        walk: true,
                                        groom: false,
                                        sit: true
                                    }
                                ]
                            })

                            Provider.create({
                                name: "Aaron",
                                img: ('https://res.cloudinary.com/df6sigxz7/image/upload/v1587590480/pet%20service%20app/provider%20profile%20photos/aaron.png'),
                                zip: 94120,
                                reviews: 2427,
                                stars: 5,
                                services: [
                                    {
                                        walk: true,
                                        groom: true,
                                        sit: true
                                    }
                                ]
                            })

                            Provider.create({
                                name: "Rosa",
                                img: ('https://res.cloudinary.com/df6sigxz7/image/upload/v1587590480/pet%20service%20app/provider%20profile%20photos/rosa.png'),
                                zip: 94120,
                                reviews: 18,
                                stars: 4,
                                services: [
                                    {
                                        walk: false,
                                        groom: false,
                                        sit: true
                                    }
                                ]
                            })

                            Provider.create({
                                name: "Connor",
                                img: ('https://res.cloudinary.com/df6sigxz7/image/upload/v1587590480/pet%20service%20app/provider%20profile%20photos/connor.png'),
                                zip: 94120,
                                reviews: 56,
                                stars: 4,
                                services: [
                                    {
                                        walk: true,
                                        groom: false,
                                        sit: true
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

