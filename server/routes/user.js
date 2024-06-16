const express = require('express');
const router = express.Router();
const userController = require("../controller/user_controller");
const passport = require('passport');

router.post("/create", userController.create);
router.post("/signin", userController.signin);
router.put("/update", passport.authenticate("jwt", {session: false}), userController.update);
router.get("/user-data/:id", passport.authenticate("jwt", {session: false}), userController.getData)

module.exports = router;