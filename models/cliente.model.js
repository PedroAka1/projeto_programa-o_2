const pool = require('./conexao.db');

// obter todos os clientes
const getAllClientes = async () => {
  const result = await pool.query(
    'SELECT id, nome, email, telefone, dta_registo FROM cliente ORDER BY id'
  );
  return result.rows;
};

module.exports = {
  getAllClientes
};