const mongoose = require("mongoose");
const newSchema = mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  author: {
    // type: mongoose.Schema.ObjectId,
    type:String
  },
  category: {
    //  type: mongoose.Schema.ObjectId,
    type:String
  },
});

module.exports = mongoose.model("news", newSchema);
