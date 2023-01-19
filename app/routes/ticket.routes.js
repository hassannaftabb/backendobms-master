const ticket = require('../controller/ticket.controller');
const router = require('express').Router();

router.post('/create', ticket.createBooking);
router.post('/get-ticket-by-id', ticket.getBookingById);

module.exports = router;
