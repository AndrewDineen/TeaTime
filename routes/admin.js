/*jshint esversion:6 */
const express = require('express');
const adminController = require('../controllers/admin');
//declare express Router to export
const router = express.Router();

//fot get requests on add-product
router.get('/add-product', adminController.getAddProduct);

router.get('/products', adminController.getProducts);
//.get for a get request, use for all
router.post('/add-product', adminController.postAddProduct);



//export the router
module.exports = router;