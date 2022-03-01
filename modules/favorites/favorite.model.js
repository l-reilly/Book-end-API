const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema({
  userFrom: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
  bookId:{type: String, required: true},
  bookTitle: { type: String, required: true },
  coverImage: { type: String, required: true }
});

module.exports = mongoose.model("Favorite", favoriteSchema);
