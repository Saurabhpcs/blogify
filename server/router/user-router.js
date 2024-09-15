const express = require("express");
const router = express.Router();
const { home,register,login, data } = require("../controllers/user-controller");
const userMiddleware = require("../middlewares/user-middleware")

const signupSchema = require("../validators/user-validator");
const validate = require("../middlewares/validator-middleware");

router.route("/").get(home);

router.route("/register").post(validate(signupSchema), register);
router.route("/login").post(login);
router.route("/data").get(userMiddleware, data);
module.exports = router;