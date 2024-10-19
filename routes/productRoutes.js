const express = require('express');
const { getAllProducts, createProduct, getProductById, updateProduct, deleteProduct } = require('../controllers/productController');
const product = require('../models/product');
const productRoutes = express.Router();

productRoutes.get('/', getAllProducts);
productRoutes.post('/', createProduct);
productRoutes.get('/:id', getProductById);
productRoutes.patch('/:id', updateProduct);
productRoutes.delete('/:id', deleteProduct);

module.exports = productRoutes;

