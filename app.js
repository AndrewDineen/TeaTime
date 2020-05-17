/*jshint esversion: 6 */

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const admin = require('./routes/admin');
const shop = require('./routes/admin');

app.use(bodyParser.urlencoded({extended: false}));

app.use(admin);
app.use(shop);
//maintain event loop
app.listen(3000);
