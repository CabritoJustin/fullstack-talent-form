const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  talent: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Form", formSchema);