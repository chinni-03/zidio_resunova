const express = require('express');
const router = express.Router();
const detailsController = require("../controller/personal_details_controller");
const passport = require('passport');

router.post("/create-details", passport.authenticate("jwt", {session: false}),detailsController.createdetails);
router.patch('/update-details/:id', passport.authenticate("jwt", {session: false}),detailsController.updateDetails);
router.delete('/delete-details', passport.authenticate("jwt", {session: false}),detailsController.deleteDetails);
router.get('/get-details/:id', passport.authenticate("jwt", {session: false}),detailsController.getDetails);
router.get("/get-all-user",passport.authenticate("jwt", {session: false}), detailsController.getAllDetails)



module.exports = router;