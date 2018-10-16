const mysql = require('mysql');
const pool = mysql.createPool({
  host: process.env.DATABASE_HOST,
  port: 3306,
  user: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  database: 'MealCoupon',
  connectionLimit: 400,
  waitForConnections: true
});
module.exports = pool;
