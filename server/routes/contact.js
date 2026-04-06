const express = require("express");
const router = express.Router();
const { submitContact, getAllMessages } = require("../controllers/contactController");

router.post("/", submitContact);
router.get("/", getAllMessages); // Admin route

module.exports = router;
