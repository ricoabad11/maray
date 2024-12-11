const express = require('express');
const booksController = require('../controllers/booksController');

const router = express.Router();

router.get('/', booksController.getAllBooks);
router.get('/genre/:genre', booksController.getBooksByGenre);

module.exports = router;