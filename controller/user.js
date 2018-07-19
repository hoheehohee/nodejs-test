const async = require('async');
const pool = require('../dbconnecter');

exports.userSel = (req, res, next) => {
  pool.getConnection((err, conn) => {
    if (err) {
      console.log('##### db connecter error: ', err);
      return;
    }
    try {
      async.waterfall([
        (callback) => {
          const query = "select uid, signId, name, comname, division, orgCode from User where comid='B068366F-5EB8-1C7E-E79C-D438C8E32F9D'";
          conn.query(query, (err, rows, fields) => {
            if (err) console.log('##### user sel error: ', err);
            else callback(err, rows);
          })
        },
        (user) => {
          res.send({
            user: user,
            code: '0000'
          });
          conn.release();
        }
      ], (err, result) => {
        console.log('##### User error: ', err)
      })
    } catch (error) {
      console.log('##### error: ', error);
    }
  });
};

exports.userMod = (req, res, next) => {
  res.send('post test');
}