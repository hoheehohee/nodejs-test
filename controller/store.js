const async = require('async');
const pool = require('../dbconnecter');
const slack = require('../services/SlackBots');

exports.storeSel = (req, res, next) => {
  pool.getConnection((err, conn) => {
    if (err) {
      console.log('##### db connecter error: ', err);
      return;
    }
    try {
      async.waterfall([
        (callback) => {
          const query = `
            select 
              s.name as storeName,
                s.address,
                s.gpslat,
                s.gpslon,
                s.phone,
              m.mid,
                m.menuname,
                m.storename,
                m.price,
                m.sellprice
            from OfficeMenuRelation as omr
            right join Menu as m on omr.menuid = m.mid
            inner join Store as s on omr.storeid = s.sid
            where omr.officeIdx = 2
            and m.status = 1;
          `;
          conn.query(query, (err, rows, fields) => {
            if (err) console.log('##### user sel error: ', err);
            else callback(err, rows);
          })
        },
        (row, callback) => {
          const store = row; // 벤디스 식당과 메뉴
          let rNum = Math.floor(Math.random() * (row.length - 0)) + 0;  // 랜덤 정수
          const menu = store[rNum];
          conn.release();
          callback(err, menu)
          console.log('##### menu: ', menu)
        },
        (menu) => {
          slack.message(menu);
          
          // res.send({
          //   store: store,
          //   code: '0000'
          // });
          // conn.release();
          // callback(store);
        },
      ], (err, result) => {
        console.log('##### User error: ', err)
      })
    } catch (error) {
      console.log('##### error: ', error);
    }
  });
};
