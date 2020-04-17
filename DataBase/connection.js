const mongoose = require("mongoose");
mongoose.Promise = Promise;

let mongoURI = ''
if(process.env.NODE_ENV === "production"){
  mongoURI = process.env.DB_URL
} else {
  mongoURI = 'mongodb://localhost/Pawtastic_db'
}
mongoose.connect(mongoURI, { useNewUrlParser: true })

module.exports = mongoose;
