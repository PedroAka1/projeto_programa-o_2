const Produto = require('../models/produto.model');

// listar produtos
const listarProdutos = async (req, res) => {
  const produtos = await Produto.getAllProdutos();
  res.render('pages/produtos', { produtos });
};

module.exports = {
  listarProdutos
};