var express = require('express');
var router = express.Router();
const { submitDetails } = require("../controllers/signUpLogic.js")

//POST
router.post('/register', submitDetails);

router.post('/new-booking', addBoking);

//GET

//PUT

//DELETE

module.exports = router;