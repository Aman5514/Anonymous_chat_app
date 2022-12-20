const router = require("express").Router();
const authCtrl = require("../controller/auth.controller");

router.route("/registration").post(authCtrl.registration);
router.route("/login").post(authCtrl.login);

module.exports = router;