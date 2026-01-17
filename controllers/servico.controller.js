const Servico = require('../models/servico.model');

// listar serviços
const listarServicos = async (req, res) => {
  const servicos = await Servico.getAllServicos();
  res.render('pages/servicos', { servicos });
};

module.exports = {
  listarServicos
};