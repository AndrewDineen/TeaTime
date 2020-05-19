/*jshint esversion:6 */
const express = require('express');
const path = require('path');

const rootDir = require('../util/path.js');
//declare express Router to export
const router = express.Router();

//fot get requests on add-product
router.get('/add-product', (req, res, next) => 
{
    //sends html to the page
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});
//.get for a get request, use for all
router.post('/product', (req, res)=>
{
    //redirect to home screen
    res.redirect('/');
});


//export the router
module.exports = router;