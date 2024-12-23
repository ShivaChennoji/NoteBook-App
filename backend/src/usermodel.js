var mongoose = require("mongoose");
var schema = mongoose.Schema;

// Define the schema
var userschema = new schema({
  Title: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  }
});
var AuthSchema = new schema({
  Email: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true
  }
});
let user = mongoose.model("user", userschema)
let Auth = mongoose.model("Authentication", AuthSchema)

module.exports = {Auth,user} 