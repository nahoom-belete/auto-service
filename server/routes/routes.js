var express = require('express');
var router = express.Router();
const { submitDetails } = require("../controllers/signUpLogic.js")

router.post('/register', submitDetails);

//GET

//PUT

//DELETE

module.exports = router;