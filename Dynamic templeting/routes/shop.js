const express = require('express');
const path = require('path');
const root = require('../utils/paths');
const shop = express.Router();
const admin = require('./admin');

shop.get("/", (req, res, next) => {
    console.log('check the control2');
    console.log(admin.products);

    // Assuming you have a template engine set up (e.g., Pug)
    res.render('shop', { prod: admin.products, doctitle: 'Shop', path : "/" });

    // If you are using plain HTML without a template engine, you can use sendFile
    // res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
});

module.exports = shop;
