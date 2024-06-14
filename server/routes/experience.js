const express = require('express');
const router = express.Router();
const experienceController = require("../controller/experience_controller");
const passport = require('passport');

router.post("/create-exe",passport.authenticate("jwt", {session: false}),experienceController.create);
router.patch("/update-exe/:id",passport.authenticate("jwt", {session: false}),experienceController.updateExe);
router.delete("/delete-exe/:id",passport.authenticate("jwt", {session: false}),experienceController.deleteExe);
router.get("/view-exe/:id",passport.authenticate("jwt", {session: false}), experienceController.getdetails)


module.exports = router;