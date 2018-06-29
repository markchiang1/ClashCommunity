var express = require("express");

var apiController = require("../controllers/apiController");

var router = new express.Router();

router.post("/users/", apiController.create);
router.post("/teams/", apiController.create);

