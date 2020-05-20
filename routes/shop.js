/*jshint esversion:6 */
const path = require('path');
const rootDir = require('../util/path.js');
const express = require('express');
const shop = express.Router();
const adminData = require('./admin');

//must use the next function if want to go to the next middleware- next();
//if using .use() function, '/' implies anything that starts with /
shop.get('/', (req, res, next) => 
{
    //sends html to the page, uses path module because sendFile cannot take a relative file path
    //this is because modules or code can call the function process.chdir() at runtime which can change the 
    //process.cwd() or current working directory.
    //__dirname holds the cwd or path to your project folder
    const product = adminData.products;
    res.render('shop', {prods: product, pageTitle: 'Shop', path:'/'});
});

/*shop.post('/add-product', (req, res, next)=>
{
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});*/

//export the shop route
module.exports=shop;