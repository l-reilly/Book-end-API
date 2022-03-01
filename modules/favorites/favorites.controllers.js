const express = require('express');
const router = express.Router();
const { Favorite } = require("../models/Favorite");



async function addFavorite(req, res) {
    try {
        const favorite = await Favorite.create(req.body);
        return res.status(200).json(favorite).end();
    } catch(err) {
        return res.status(400).json(err.message).end
    }
}

async function deleteFavorite(req, res) {
    try{
        const { favoriteId } = req.params;
        if (!isObjectId(favoriteId)) {
            res.status(400).json("Id not valid").end();
    }
    const favorite = await Favorite.findByIdAndDelete(favoriteId).lean();
    return res.status(200).json(favorite).end();
} catch(err) {
    res.status(400).json(err.message).end();
}
}


module.exports = {
    addFavorite,
    deleteFavorite
};