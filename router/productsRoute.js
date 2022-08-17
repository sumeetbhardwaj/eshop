const express = require('express');
const Router = express.Router();
const productsController = require('../controllers/productsController')

Router.route("/shop").get(productsController.products);
Router.route("/product_details").get(productsController.productDetails);
Router.route("/cart").get(productsController.cart);
Router.route("/checkout").get(productsController.checkOut);


module.exports = Router;