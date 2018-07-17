const express = require('express');
const pool = require('../dbconnecter');
const router = express.Router();

router.get('/test', (req, res, next) => {

  pool.getConnection((err, conn) => {
    if(err){
      console.log('##### db connecter error: ', err);
      return;
    }
    
    try {
      console.log('##### conn: ', conn);
    } catch (error) {
      console.log('##### error: ', error);
    }
  })
  res.send('router setting');
});

module.exports = router;