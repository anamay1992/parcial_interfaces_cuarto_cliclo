const cors = require('cors');
const express = require('express');
const productRoutes = require('./routes/product.routes');
const app = express();
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());
app.use('/api/products', productRoutes);

module.exports = app;