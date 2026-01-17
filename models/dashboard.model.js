const pool = require('./conexao.db');

// contagens para o dashboard
const getDashboardData = async () => {
  const clientes = await pool.query('SELECT COUNT(*) FROM cliente');
  const servicos = await pool.query('SELECT COUNT(*) FROM servico');
  const produtos = await pool.query('SELECT COUNT(*) FROM produto');

  return {
    totalClientes: clientes.rows[0].count,
    totalServicos: servicos.rows[0].count,
    totalProdutos: produtos.rows[0].count
  };
};

module.exports = {
  getDashboardData
};