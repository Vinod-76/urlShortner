const express = require("express");
const {
  urlShortnerController,
} = require("../../controllers/urlShortnerController/url");
const urlRouter = express.Router();

urlRouter.post("/create", urlShortnerController.create);
urlRouter.get("/:shortid", urlShortnerController.getUrl);
urlRouter.get("/analytics/:shortid", urlShortnerController.getAnalytics);

module.exports = { urlRouter };
