const express = require("express");

const router = express.Router();

const villageController = require("../controllers/villageController");

router.post("/save", villageController.saveLink);

router.get("/get", villageController.getLink);

router.get("/list", villageController.getVillages);

module.exports = router;