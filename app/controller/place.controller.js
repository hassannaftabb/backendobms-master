const places = require('../data/places');

//Create Place
const createPlace = async (req, res) => {
  try {
    const data = await places.createPlace(req.body);
    res.status(200).json({ data });
  } catch (err) {
    return res.status(500).send({
      errorMessage: 'Something went wrong',
      error: err,
    });
  }
};
//Get All Places
const getAllPlaces = async (req, res) => {
  try {
    const data = await places.getAllPlaces();
    res.status(200).json({ data });
  } catch (err) {
    return res.status(500).send({
      errorMessage: 'Something went wrong',
      error: err,
    });
  }
};
//Place By Id
const getPlaceById = async (req, res) => {
  try {
    const data = await places.getPlaceById(req.body.placeId);
    res.status(200).json({ data });
  } catch (err) {
    return res.status(500).send({
      errorMessage: 'Something went wrong',
      error: err,
    });
  }
};
//Update Place Status
const updatePlaceStatusById = async (req, res) => {
  try {
    const data = await places.updatePlaceStatusById(req.body);
    res.status(200).json({ data });
  } catch (err) {
    return res.status(500).send({
      errorMessage: 'Something went wrong',
      error: err,
    });
  }
};

module.exports = {
  createPlace,
  getAllPlaces,
  getPlaceById,
  updatePlaceStatusById,
};
