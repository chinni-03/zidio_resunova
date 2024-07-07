const express = require('express');
const router = express.Router();
const homeController = require("../controller/home_controller");
const passport = require('passport');
const { signin } = require('../controller/user_controller');

router.get("/", homeController.home);

router.use('/user', require("./user"));
router.use('/personal', require("./personal"));
router.use("/experience", require("./experience"));
router.use('/education', require("./education"));
router.use("/skill", require("./skill"));
router.use("/award", require("./award"));
router.use("/feedback", require("./feedback"));
router.use("/project", require("./project"));

module.exports = router;
