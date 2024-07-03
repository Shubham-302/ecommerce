// routes/productRoutes.js

const express = require('express');
const router = express.Router();

// Example route to get all products
router.get('/', (req, res) => {
  res.send('List of all products');
});

// Example route to get a specific product by ID
router.get('/:id', (req, res) => {
  res.send(`Details of product with ID ${req.params.id}`);
});

// You can add more routes here for adding, updating, and deleting products

module.exports = router;
