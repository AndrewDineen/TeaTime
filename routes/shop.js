/*jshint esversion:6 */

const express = require('express');
const productsController = require('../controllers/products');
const shop = express.Router();


shop.get('/', productsController.getProducts);


module.exports=shop;