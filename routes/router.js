const express = require('express');
const user = require('../controller/user');
const router = express.Router();

router.route('/user')
  .get(user.userSel)
  .post(user.userMod);

module.exports = router;