const pool = require('./conexao.db');

// verificar login
const login = async (username, password) => {
  const result = await pool.query(
    'SELECT * FROM utilizador WHERE username = $1 AND password = $2',
    [username, password]
  );

  return result.rows[0];
};

module.exports = {
  login
};