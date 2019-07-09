const express = require('express');
const user = require('../controller/user');
const store = require('../controller/store');
const email = require('../controller/email')
const logServer = require('../controller/logServer')
const hohee = require('../controller/hohee');
const router = express.Router();

router.route('/hohee')
  .get(hohee.test)
  
router.route('/user')
  .get(user.userSel)
  .post(user.userSel);

router.route('/accepterUser')
  .get(user.acceptersUser)

router.route('/store')
  .get(store.storeSel)

router.route('/email')
  .post(email.send)

router.route('/logServer')
  .post(logServer.loginput)

module.exports = router