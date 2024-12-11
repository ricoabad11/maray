const express = require('express');
const dotenv = require('dotenv');
const booksRoutes = require('./routes/booksRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/books', booksRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});