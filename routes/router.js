const express = require('express');
const user = require('../controller/user');
const store = require('../controller/store');
const email = require('../controller/email')
const router = express.Router();

router.route('/user')
  .get(user.userSel)
  .post(user.userSel);

router.route('/store')
  .get(store.storeSel)

router.route('/email')
  .post(email.send)

module.exports = router;