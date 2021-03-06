const express = require("express");
const ROUTES = require("./favorites.constants");
const middlewares = require("../../middlewares/auth.middlewares");
const controllers = require("./favorites.controllers");



function favoritesRouter(app) {
  const router = express.Router();

  router
    .get(ROUTES.getFavorites, middlewares.isLoggedIn, controllers.getFavorites)
    .get(ROUTES.getFavoriteById, middlewares.isLoggedIn, controllers.getFavoriteById)
    .post(ROUTES.createFavorite, middlewares.isLoggedIn, controllers.createFavorite)
    .put(ROUTES.favoriteUpdate, middlewares.isLoggedIn, controllers.favoriteUpdate)
    .delete(ROUTES.favoriteDelete, middlewares.isLoggedIn, controllers.favoriteDelete);

  app.use("/api", router);
}

module.exports = favoritesRouter;