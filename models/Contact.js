const mongoose = require("mongoose");

const { Schema } = mongoose;

const contact = new Schema({
  title: { type: String, required: true }, 
  notDone: { type: Boolean},
});

const Contact = mongoose.model("contact", contact);
module.exports = Contact;
