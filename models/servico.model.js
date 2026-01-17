const pool = require('./conexao.db');

// obter todos os serviços com o nome do cliente
const getAllServicos = async () => {
  const result = await pool.query(`
    SELECT 
      s.id,
      s.tipo,
      s.estado,
      c.nome AS cliente,
      s.dta_entrada,
      s.dta_saida
    FROM servico s
    JOIN cliente c ON s.id_cliente = c.id
    ORDER BY s.id
  `);

  return result.rows;
};

module.exports = {
  getAllServicos
};