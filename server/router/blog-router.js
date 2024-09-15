const express = require('express');
const router = express.Router();
const { blogGenerator } = require("../controllers/blog-controller");
router.route("/generate").post(blogGenerator);
module.exports = router;