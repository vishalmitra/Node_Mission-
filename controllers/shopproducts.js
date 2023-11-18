const Product = require('../models/productmodle')

exports.shop_middleware1 = (req, res, next) => {
    console.log('check the control2');
 
    const listprod = Product.fetchall();
    // Assuming you have a template engine set up (e.g., Pug now updated to ejs)
    res.render('shop/index', { prod:  listprod ,  doctitle: 'Shop', path : "/" });

    // If you are using plain HTML without a template engine, you can use sendFile
    // res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
}



exports.getCart = (req, res, next) => {
    console.log('cart');
 
    const listprod = Product.fetchall();
  
    res.render('shop/cart', { prod:  listprod ,  doctitle: 'Cart', path : "/cart" });

   
}


exports.getProducts = (req, res, next) => {
    console.log('getproducts');
 
    const listprod = Product.fetchall();
  
    res.render('shop/products', { prod:  listprod ,  doctitle: 'products', path : "/products" });   
}


exports.getcheckout = (req, res, next) => {
    console.log('adminproducts');
    const listprod = Product.fetchall();
  
    res.render('shop/checkout', { prod:  listprod ,  doctitle: 'adminproducts', path : "/adminproducts" });   
}


