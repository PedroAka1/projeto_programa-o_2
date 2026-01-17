const { Pool } = require('pg');
const config = require('../config/db.config');

// criar pool de ligações
const pool = new Pool(config);

// exportar para usar nos models
module.exports = pool;