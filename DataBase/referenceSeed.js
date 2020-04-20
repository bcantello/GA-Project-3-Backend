// we won't be using seed.json
const mongoose = require('mongoose')
// Models
const User = require('../models/users')
const Bookmark = require('../models/bookmarks')

User.deleteMany({}).then(() => {
    console.log('deleted all users')
    Bookmark.deleteMany({}).then(() => {
        console.log('delted all bookmarks')

        User.create({
            name: "Paul Allen",
            email: "paul@microsoft.com"
        }).then(paul => {
            console.log('paul has been created', paul)
            Bookmark.create({
                title: "Microsoft",
                url: "https://microsoft.com",
                favorited: paul.id
            }).then(ms => {
                paul.favorites.push(ms.id)
                paul.save()
                console.log("created Microsoft Bookmark", ms, paul);
            })

            Bookmark.create({
                title: "reddit",
                url: "https://reddit.com"
            }).then(() => {
                console.log("created Paul:Reddit");
            })
        })

        User.create({
            name: "Sergie Brin",
            email: "sergei@google.com"
        }).then( sergie => {
            Bookmark.create({
                title: "Google",
                url: "https://google.com",
                favorited: sergie.id
            }).then( google => {
                sergie.favorites.push(google)
                sergie.save()
                console.log("created Sergei:Google");
            })

            Bookmark.create({
                title: "Hacker news",
                url: "https://hackernews.com"
            }).then(() => {
                process.exit()
                // mongoose.connection.close()
            })
        })
    })
})