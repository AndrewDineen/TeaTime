/*jshint esversion: 6 */

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const admin = require('./routes/admin');
const shop = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', admin);
app.use(shop);

app.use((req, res, next)=>
{
    res.status(404).send('<h1>Page not found</h1>');
});
//maintain event loop
app.listen(3000);
