const express = require('express');
const router = express.Router();
const projecftController = require("../controller/project_controller");
const passport = require('passport');

router.post("/create", passport.authenticate("jwt", {session: false}),projecftController.create);
router.patch('/update/:id', passport.authenticate("jwt", {session: false}),projecftController.update);
router.delete('/delete/:id', passport.authenticate("jwt", {session: false}),projecftController.delete);
router.get('/get-details/:id', passport.authenticate("jwt", {session: false}),projecftController.getData);
router.get("/view-all-detail", passport.authenticate("jwt", {session: false}), projecftController.getAllDetails);


module.exports = router;