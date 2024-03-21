const express = require("express");
const authorRouter = require("./authors");
const logger = require("./logger");

const app = express();
const PORT = 3000;

app.use(express.json());

// Use the logger middleware
app.use(logger);

// Mount authorRouter
app.use("/authors", authorRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
