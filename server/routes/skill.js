const express = require('express');
const router = express.Router();
const skillController = require("../controller/skill_controller");
const passport = require('passport');

router.post("/create",passport.authenticate("jwt", {session: false}) ,skillController.create);
router.put("/update/:id",passport.authenticate("jwt", {session: false}) ,skillController.update);
router.delete("/delete/:id",passport.authenticate("jwt", {session: false}) ,skillController.delete);
router.get("/getdata/:id",passport.authenticate("jwt", {session: false}) ,skillController.getskill);


module.exports = router;