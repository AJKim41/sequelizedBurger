const express = require("express");

const burgerController = require("../controllers/burger");

const router = express.Router();

router.get("/", burgerController.burgerHome);

module.exports = router;
