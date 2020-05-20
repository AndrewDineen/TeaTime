/*jshint esversion:6 */
const express = require('express');
const path = require('path');

const rootDir = require('../util/path.js');
//declare express Router to export
const router = express.Router();

const products = [];

//fot get requests on add-product
router.get('/add-product', (req, res, next) => 
{
    //sends html to the page
    res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'});
});
//.get for a get request, use for all
router.post('/add-product', (req, res)=>
{
    products.push({title: req.body.title});
    //redirect to home screen
    res.redirect('/');
});


//export the router
exports.routes = router;
exports.products = products;