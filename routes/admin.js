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

router.get('/edit-product/:productId', adminController.getEditProduct);

router.post('/edit-product', adminController.postEditProduct);

router.post('/delete-product', adminController.postDeleteProduct);

//export the router
module.exports = router;