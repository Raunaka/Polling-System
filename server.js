const express = require('express');
const db = require('./config/mongoose');
const port = process.env.PORT || 8000;
const app = express();
const dotenv = require('dotenv').config();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
  }));

app.use(bodyParser.json());

app.use('/', require('./routes'));

app.listen(port, (err) => {

    if (err) {
        console.log(`Error while Running the Server: ${err}`);
        return;
    }

    console.log(`Express Server is running on port: ${port}`);

});