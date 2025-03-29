const express = require("express");
const router = express.Router();
const contactForm = require("../controllers/contact-controller");  // Correct import

router.route("/contact").post(contactForm);  // Use contactForm function

module.exports = router;
