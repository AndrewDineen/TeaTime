/*jshint esversion:6 */
const express = require('express');
const productsController = require('../controllers/products.js');
//declare express Router to export
const router = express.Router();

//fot get requests on add-product
router.get('/add-product', productsController.getAddProduct);
//.get for a get request, use for all
router.post('/add-product', productsController.postAddProduct);


//export the router
module.exports = router;