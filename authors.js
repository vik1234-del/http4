const express = require("express");
const router = express.Router();
const logger = require("./logger");

// Temporary data store
let authors = [
  { id: 1, name: "Author 1" },
  { id: 2, name: "Author 2" },
];

// Logger middleware specific to Author routes
router.use(logger);

// GET all authors
router.get("/", (req, res) => {
  res.json(authors);
});

// GET single author by ID
router.get("/:id", (req, res) => {
  const authorId = parseInt(req.params.id);
  const author = authors.find((author) => author.id === authorId);
  if (!author) {
    return res.status(404).json({ message: "Author not found" });
  }
  res.json(author);
});

// POST create a new author
router.post("/", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }
  const newAuthor = { id: authors.length + 1, name };
  authors.push(newAuthor);
  res.status(201).json(newAuthor);
});

// PUT update an author by ID
router.put("/:id", (req, res) => {
  const authorId = parseInt(req.params.id);
  const { name } = req.body;
  const author = authors.find((author) => author.id === authorId);
  if (!author) {
    return res.status(404).json({ message: "Author not found" });
  }
  author.name = name;
  res.json(author);
});

// DELETE an author by ID
router.delete("/:id", (req, res) => {
  const authorId = parseInt(req.params.id);
  authors = authors.filter((author) => author.id !== authorId);
  res.sendStatus(204);
});

module.exports = router;
