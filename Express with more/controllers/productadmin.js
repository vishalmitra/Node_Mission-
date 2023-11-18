
const Product = require('../models/productmodle')

// const products = [];

// exports.products =  products; 

exports.admin_middleware1= (req, res, next) => {
    // const html = '<html> <head> <title> Form</title></head>  <body> <form method="POST" action="/admin/users">  <input type="text" name="username">  <button type="submit">Submit</button> </form> </body> </html>'
    // res.send(html);
    //res.sendFile(path.join(__dirname, "../","views", "add_product.html"));
    console.log("control in the /admin/form" )
    res.render('admin/add_product', {doctitle:'Home-admin', path : "/admin/form"});

}

exports.admin_middleware2 = (req, res, next) => {
    const { username, imageurl, price, description } = req.body;
    const product = new Product({ username, imageurl, price, description });
    product.save();

    console.log("In /users middleware");
    console.log('Received form data:', req.body);
    res.redirect('/');
};

