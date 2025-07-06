const db = require('../config/db');

const Product = {
  getAll: () => db.query('SELECT * FROM products'),
  getById: (id) => db.query('SELECT * FROM products WHERE id = ?', [id]),
  create: (data) => db.query('INSERT INTO products (name, price) VALUES (?, ?)', [data.name, data.price]),
  update: (id, data) => db.query('UPDATE products SET name = ?, price = ? WHERE id = ?', [data.name, data.price, id]),
  delete: (id) => db.query('DELETE FROM products WHERE id = ?', [id]),
};

module.exports = Product;