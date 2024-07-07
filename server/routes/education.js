const express = require('express');
const router = express.Router();
const educationController = require("../controller/education_controller");
const passport = require('passport');

router.post("/create-details",passport.authenticate("jwt", {session: false}),educationController.createedu);
router.patch("/update-details/:id",passport.authenticate("jwt", {session: false}),educationController.updateEdu);
router.delete("/delete-details", passport.authenticate("jwt", {session: false}), educationController.deleteEdu);
router.get("/get-details/:id", passport.authenticate("jwt", {session: false}), educationController.getEdu);
router.get("/get-All-data", passport.authenticate("jwt", {session: false}), educationController.getAllDetails);


module.exports = router;