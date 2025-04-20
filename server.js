const express = require('express');
const cors = require('cors');
require('dotenv').config();

const sequelize = require('./config/db');
const Book = require('./models/Book');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/books', require('./routes/books'));

// Sync database and start server
sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running at http://localhost:${process.env.PORT}`);
  });
});
