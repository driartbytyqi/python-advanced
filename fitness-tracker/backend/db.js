const mysql = require('mysql2/promise');
require('dotenv').config();

let pool = null;

const initialize = async () => {
  try {
    pool = mysql.createPool({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'fitness_tracker',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    const connection = await pool.getConnection();
    console.log('✅ Connected to MySQL database');
    connection.release();
  } catch (err) {
    console.error('❌ Error connecting to MySQL:', err.message);
    process.exit(1);
  }
};

const run = async (sql, params = []) => {
  const connection = await pool.getConnection();
  try {
    const [result] = await connection.execute(sql, params);
    return { id: result.insertId, changes: result.affectedRows };
  } finally {
    connection.release();
  }
};

const get = async (sql, params = []) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.execute(sql, params);
    return rows[0] || null;
  } finally {
    connection.release();
  }
};

const all = async (sql, params = []) => {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.execute(sql, params);
    return rows || [];
  } finally {
    connection.release();
  }
};

const close = async () => {
  if (pool) {
    await pool.end();
    console.log('Database connection closed');
  }
};

module.exports = {
  initialize,
  run,
  get,
  all,
  close,
};
