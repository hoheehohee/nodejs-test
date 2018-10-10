const async = require('async');
const pool = require('../lib/db');
const accepters = require('../util/AccepterUser');

exports.userSel = (req, res, next) => {
  pool.getConnection((err, conn) => {
    if (err) {
      console.log('##### db connecter error: ', err);
      return;
    }
    try {
      async.waterfall([
        (callback) => {
          console.log('##### req.body: ', req.body)
          const query = "select * from User where comid='B068366F-5EB8-1C7E-E79C-D438C8E32F9D'";
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

exports.acceptersUser = (req, res, next) => {
  try {
    async.waterfall([
      (callback) => {
        const aUser = require('../util/JSON/accepterUser.json');
        const map = accepters.user(aUser);
        res.send({
          code: '0000',
          map: map.get('E554E99F-F65C-3C92-D08C-BD251A01CE8B')
        });
      }
    ], (err, result) => {
      console.log('##### async.waterfall error: ', err)
    })
  } catch (error) {
    console.log('##### error: ', error)
  }
}

exports.userMod = (req, res, next) => {
  res.send('post test');
}