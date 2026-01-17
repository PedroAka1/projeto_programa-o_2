const pool = require('./conexao.db');

// obter todos os produtos
const getAllProdutos = async () => {
  const result = await pool.query(
    'SELECT id, nome, categoria, preco, stock FROM produto ORDER BY id'
  );
  return result.rows;
};

module.exports = {
  getAllProdutos
};