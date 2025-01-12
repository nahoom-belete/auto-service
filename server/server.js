const express = require('express');
const cors = require("cors");
const app = express();
const {getConnection, getCustomers, closeConnection}= require("./controllers/dbConnection.js")

var routes = require('./routes/routes.js');

app.use(cors());
app.use(express.json())

app.use('/', routes);

const dbInstance = getConnection();
getCustomers(dbInstance);
closeConnection(dbInstance);


app.listen(8080, () => {
    console.log('server listening on port 8080')
})
