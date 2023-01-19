const booking = require('../data/booking');

//Create Booking
const createBooking = async (req, res) => {
  try {
    const data = await booking.createBooking(req.body);
    res.status(200).json({ data });
  } catch (err) {
    return res.status(500).send({
      errorMessage: 'Something went wrong',
      error: err,
    });
  }
};
//Get Booking By ID
const getBookingById = async (req, res) => {
  try {
    const data = await booking.getBookingById(req.body.B_ID);
    res.status(200).json({ data });
  } catch (err) {
    return res.status(500).send({
      errorMessage: 'Something went wrong',
      error: err,
    });
  }
};
module.exports = {
  createBooking,
  getBookingById,
};
