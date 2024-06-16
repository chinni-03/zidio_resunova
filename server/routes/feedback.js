const express = require('express');
const router = express.Router();
const feedbackController = require("../controller/feedback_controller");

router.post("/create", feedbackController.create)


module.exports = router;