const ssouser = require('../controller/ssouser.controller');
const router = require('express').Router();

router.post('/create', ssouser.createSSOUser);
router.post('/', ssouser.getSSOByID);
router.post('/update', ssouser.updateSSOUser);
router.post('/login', ssouser.login);

module.exports = router;
