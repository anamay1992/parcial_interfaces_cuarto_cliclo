const Product = require('../models/product.model');

exports.getAll = async (req, res) => {
  const [rows] = await Product.getAll();
  res.json(rows);
};

exports.getById = async (req, res) => {
  const [rows] = await Product.getById(req.params.id);
  rows.length ? res.json(rows[0]) : res.status(404).json({ msg: 'No encontrado' });
};

exports.create = async (req, res) => {
  const { name, price } = req.body;
  await Product.create({ name, price });
  res.status(201).json({ msg: 'Producto creado' });
};

exports.update = async (req, res) => {
  const { name, price } = req.body;
  await Product.update(req.params.id, { name, price });
  res.json({ msg: 'Producto actualizado' });
};

exports.delete = async (req, res) => {
  await Product.delete(req.params.id);
  res.json({ msg: 'Producto eliminado' });
};