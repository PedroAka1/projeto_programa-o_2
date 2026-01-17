const Cliente = require('../models/cliente.model');

// mostrar lista de clientes
const listarClientes = async (req, res) => {
  const clientes = await Cliente.getAllClientes();
  res.render('pages/clientes', { clientes });
};

module.exports = {
  listarClientes
};