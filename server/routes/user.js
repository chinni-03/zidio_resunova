const express = require('express');
const router = express.Router();
const userController = require("../controller/user_controller");
const passport = require('passport');
const multer = require("multer");
const upload = multer({storage: multer.memoryStorage()})

router.post("/create", userController.create);
router.post("/signin", userController.signin);
router.patch("/update", passport.authenticate("jwt", {session: false}), userController.update);
router.get("/user-data", passport.authenticate("jwt", {session: false}), userController.getData);
router.post("/send-resume", upload.single('file'), passport.authenticate("jwt", {session: false}), userController.sendResume);

module.exports = router;