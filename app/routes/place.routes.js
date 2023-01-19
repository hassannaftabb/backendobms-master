const place = require('../controller/place.controller');
const router = require('express').Router();

router.post('/create', place.createPlace);
router.get('/', place.getAllPlaces);
router.post('/get-by-id', place.getPlaceById);
router.post('/update-status', place.updatePlaceStatusById);

module.exports = router;
