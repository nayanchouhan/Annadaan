const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
	res.render("home/welcome");
});

router.get("/home/about-us", (req,res) => {
	res.render("home/aboutUs", { title: "About Us - Annadaan" });
});

router.get("/home/mission", (req,res) => {
	res.render("home/mission", { title: "Our mission - Annadaan" });
});

router.get("/home/contact-us", (req,res) => {
	res.render("home/contactUs", { title: "Contact us - Annadaan" });
});


module.exports = router;