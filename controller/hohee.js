const async = require('async');

exports.test = (req, res, next) => {
  try {
    async.waterfall([
      (callback) => {
        // throw Error;
        res.send({
          name: 'yongho',
          age: 33,
          id: 'hohee',
          testUrl: 'http://localhost:3002'
        });
      }
    ], (err, result) => {
      console.log('##### email error: ', err)
    })
  } catch (error) {
    console.log('##### error: ', error);
  }
};
