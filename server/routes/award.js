const express = require('express');
const router = express.Router();
const awardController = require("../controller/award_controller");
const passport = require('passport');

router.post("/create-details",passport.authenticate("jwt", {session: false}),awardController.create);
router.patch("/update-details/:id",passport.authenticate("jwt", {session: false}),awardController.update);
router.delete("/delete-details/:id", passport.authenticate("jwt", {session: false}), awardController.delete);
router.get("/get-details/:id", passport.authenticate("jwt", {session: false}), awardController.getawards);

module.exports = router;