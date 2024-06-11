const express = require('express');
const router = express.Router();
const skillController = require("../controller/skill_controller");
const passport = require('passport');

router.post("/create",passport.authenticate("jwt", {session: false}) ,skillController.create);


module.exports = router;