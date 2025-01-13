var express = require('express');
var router = express.Router();
const { addBooking } = require("../controllers/booking.js")

//POST
// router.post('/register', submitDetails);

router.post('/new-booking', addBooking);

//GET

//PUT

//DELETE

module.exports = router;