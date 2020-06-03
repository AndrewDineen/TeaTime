/*jshint esversion:6 */

const express = require('express');
const shopController = require('../controllers/shop');
const shop = express.Router();


shop.get('/', shopController.getIndex);

shop.get('/products', shopController.getProducts);

shop.get('/cart', shopController.getCart);

shop.get('/orders', shopController.getOrders);

shop.get('/checkout', shopController.getCheckout);

module.exports=shop;