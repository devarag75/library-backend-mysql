const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// Get all books
router.get('/', async (req, res) => {
  const books = await Book.findAll();
  res.json(books);
});

// Add a book
router.post('/', async (req, res) => {
  const book = await Book.create(req.body);
  res.json(book);
});

// Toggle availability
router.put('/:id', async (req, res) => {
  const book = await Book.findByPk(req.params.id);
  book.available = !book.available;
  await book.save();
  res.json(book);
});

module.exports = router;
