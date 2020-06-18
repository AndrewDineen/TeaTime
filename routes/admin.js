/*jshint esversion:6 */
const express = require('express');
const adminController = require('../controllers/admin');
const isAuth = require('../middleware/is-auth');
//declare express Router to export
const router = express.Router();

//fot get requests on add-product
router.get('/add-product', isAuth,  adminController.getAddProduct);

router.get('/products', isAuth, adminController.getProducts);
//.get for a get request, use for all
router.post('/add-product', isAuth, adminController.postAddProduct);

router.get('/edit-product/:productId', isAuth, adminController.getEditProduct);

router.post('/edit-product', isAuth, adminController.postEditProduct);

router.post('/delete-product', isAuth, adminController.postDeleteProduct);

//export the router
module.exports = router;