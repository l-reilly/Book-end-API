const controllers = require("./favorites.controllers");
const ROUTES = require("./favorites.constants");
const express = require("express");

function FavoritesRouter(app) {
  const router = express.Router();

  router
    .get(ROUTES.getFavorites, controllers.getFavorites)
    .post(ROUTES.addFavorite, controllers.addFavorite)
    .delete(ROUTES.deleteFavorite, controllers.deleteFavorite);

  app.use("/api", router);
}

module.exports = FavoritesRouter;