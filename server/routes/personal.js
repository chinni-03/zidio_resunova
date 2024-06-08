const express = require('express');
const router = express.Router();
const detailsController = require("../controller/personal_details_controller");
const passport = require('passport');

router.post("/create-details", detailsController.createdetails);
router.patch('/update-details/:id', detailsController.updateDetails);
router.delete('/delete-details/:id', detailsController.deleteDetails)


module.exports = router;