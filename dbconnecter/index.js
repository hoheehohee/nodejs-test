const mysql = require('mysql');

const pool = mysql.createPool({
  host: 'test-sikdae-cluster.cluster-cofqettussu1.ap-northeast-2.rds.amazonaws.com',
  port: 3306,
  user: 'sikdae',
  password: 'tnavhdlsxm',
  database: 'MealCoupon',
  connectionLimit: 400,
  waitForConnections: true
});

module.exports = pool;
