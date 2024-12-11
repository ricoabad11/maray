const books = require('../models/booksModel');

exports.getAllBooks = (req, res) => {
  res.json(books);
};

exports.getBooksByGenre = (req, res) => {
  const genre = req.params.genre;
  const filteredBooks = books.filter(book => book.genre === genre);
  res.json(filteredBooks);
};