const router = require('express').Router();
const ssoRouter = require('../routes/ssouser.routes');
const placeRouter = require('../routes/place.routes');
const accountRouter = require('../routes/account.routes');
const ticketRouter = require('../routes/ticket.routes');

router.use('/user', ssoRouter);
router.use('/place', placeRouter);
router.use('/account', accountRouter);
router.use('/ticket', ticketRouter);

module.exports = router;
