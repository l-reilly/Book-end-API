const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema({
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "book",
  },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "user" }
});

module.exports = mongoose.model("favorite", favoriteSchema);