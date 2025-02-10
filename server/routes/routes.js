var express = require('express');
var router = express.Router();
const { addBooking } = require("../controllers/booking.js");
const { submitDetails } = require("../controllers/signUp.js")

//POST
router.post('/register', submitDetails);

router.post('/new-booking', addBooking);

//GET

//PUT

//DELETE

module.exports = router;