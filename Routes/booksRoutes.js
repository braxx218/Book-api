const express = require("express");
const router = express.Router();
const { getAllBooks, getBooksByGenre } = require("../Controllers/booksController");

router.get("/", getAllBooks);
router.get("/genre/:genre", getBooksByGenre);

module.exports = router;