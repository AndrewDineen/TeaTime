/*jshint esversion: 6 */

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const error = require('./controllers/error');
const adminRoutes = require('./routes/admin');
const shop = require('./routes/shop');



app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRoutes);
app.use(shop);

app.use('/', error.get404);

//maintain event loop
app.listen(3000);
