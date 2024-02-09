const express = require("express");
const { fetchUserById } = require("../controllers/User.controller");


const router = express.Router();

router.get("/:id", fetchUserById);

module.exports = router;