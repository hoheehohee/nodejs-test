const async = require('async');

exports.loginput = (req, res, next) => {
  try {
    async.waterfall([
      (callback) => {
        console.log('##### res: ', res);
        console.log('##### req: ', req);
        res.send({
          code: '1111'
        });
      }
    ], (err, result) => {
      console.log('##### email error: ', err)
    })
  } catch (error) {
    console.log('##### error: ', error);
  };
};
