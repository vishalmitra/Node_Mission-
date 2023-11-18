const express = require('express');
const path = require('path');
const root = require('../utils/paths');
const shop = express.Router();
const admin = require('./admin');
const shopproducts = require('../controllers/shopproducts');


shop.get("/", shopproducts.shop_middleware1);
shop.get('/products', shopproducts.getProducts);
shop.get('/cart', shopproducts.getCart);
shop.get('/adminproducts', shopproducts.getcheckout);


module.exports = shop;
