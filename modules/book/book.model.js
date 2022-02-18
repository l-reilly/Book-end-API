const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  owner:{type: mongoose.Schema.Types.ObjectId, ref: "User"}
  //author: { type: String, required: true },
  //description: { type: String, required: true },
  //ISBN: {type: Number, required: true},
  //genre: { type: String, required: true},
  //imageUrl: { type: String }
  //tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
});

module.exports = mongoose.model("Book", bookSchema);
