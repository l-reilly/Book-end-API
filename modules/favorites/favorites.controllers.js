const mongoose = require("mongoose");
const Favorite = require("./favorites.model");
const User = require("../auth/user.model");


function isObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

async function getFavorites(req, res) {
  try {
    const userId = req.session.user._id;
    const user = await User.findById(userId);
    const favorites = await Favorite.find({ "user": {$eq: user._id}}).populate("book").lean();
    res.status(200).json(favorites).end();
  } catch (err) {
    res.status(400).json(err.message).end();
  }
}

async function getFavoriteById(req, res) {
  try {
    const { favoriteId } = req.params;
    if (!isObjectId(favoriteId)) {
      res.status(400).json("Id not valid").end();
    }
    const favorite = await Favorite.findById(favoriteId)
      .populate("book")
      .lean();
    res.status(200).json(favorite).end();
  } catch (err) {
    res.status(400).json(err.message).end();
  }
}

async function createFavorite(req, res) {
  try {
    const favorite = await Favorite.create({
      ...req.body,
      user: req.session.user._id,
    });
    res.status(200).json(favorite).end();
  } catch (err) {
    res.status(400).json(err.message).end();
  }
}

async function favoriteUpdate(req, res) {
  try {
    const { favoriteId } = req.params;
    if (!isObjectId(favoriteId)) {
      res.status(400).json("Id not valid").end();
    }
    const favorite = await Favorite.findByIdAndUpdate(favoriteId, req.body, {
      new: true,
    }).lean();

    res.status(200).json(favorite).end();
  } catch (err) {
    res.status(400).json(err.message).end();
  }
}

async function favoriteDelete(req, res) {
  try {
    const { favoriteId } = req.params;
    if (!isObjectId(favoriteId)) {
      res.status(400).json("Id not valid").end();
    }
    const favorite = await Favorite.findByIdAndDelete(favoriteId).lean();
    res.status(200).json(favorite).end();
  } catch (err) {
    res.status(400).json(err.message).end();
  }
}

module.exports = {
getFavorites,
getFavoriteById,
createFavorite,
favoriteUpdate,
favoriteDelete,
};