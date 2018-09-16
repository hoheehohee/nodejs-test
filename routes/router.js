const express = require('express');
const user = require('../controller/user');
const store = require('../controller/store');
const router = express.Router();

router.route('/user')
  .get(user.userSel)
  .post(user.userMod);

router.route('/store')
  .get(store.storeSel)

module.exports = router;