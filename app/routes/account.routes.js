const account = require('../controller/account.controller');
const router = require('express').Router();

router.post('/create', account.addAccountDetails);
router.post('/', account.getAccountById);

module.exports = router;
