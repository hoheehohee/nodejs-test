const async = require('async');
const pool = require('../dbconnecter');
const email = require('../services/emailsend');

exports.send = (req, res, next) => {
  pool.getConnection((err, conn) => {
    if (err) {
      console.log('##### db connecter error: ', err);
      return;
    }
    try {
      async.waterfall([
        (callback) => {
          // email.send(req.body);
          res.send({
            code: '0000'
          });
        }
      ], (err, result) => {
        console.log('##### email error: ', err)
      })
    } catch (error) {
      console.log('##### error: ', error);
    }
  });
};
