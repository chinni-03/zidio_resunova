const express = require('express');
const router = express.Router();
const homeController = require("../controller/home_controller");

router.get("/", homeController.home)
router.use('/user', require("./user"));
router.use('/personal', require("./personal"));
router.use('/education', require("./education"));
router.use("/skill", require("./skill"));
router.use("/award", require("./award"));
router.use("/feedback", require("./feedback"))

module.exports = router;