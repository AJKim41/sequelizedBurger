const express = require("express");

const burgerController = require("../controllers/burger");

const router = express.Router();

router.post("/api/burger", burgerController.postBurger);
router.put("/api/devour", burgerController.devourBurger);

module.exports = router;
