const express = require('express');
const cors = require("cors");
const app = express();

var routes = require('./routes/routes.js');

app.use(cors());
app.use(express.json())

app.use('/', routes);

app.listen(8080, () => {
    console.log('server listening on port 8080')
})
