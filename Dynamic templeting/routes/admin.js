const express = require('express');
const path = require('path');
const router = express.Router();
const root = require('../utils/paths');

const products = [];

// 'admin/form' from actually because its defiend like that in the app.js 
router.get('/form', (req, res, next) => {
    // const html = '<html> <head> <title> Form</title></head>  <body> <form method="POST" action="/admin/users">  <input type="text" name="username">  <button type="submit">Submit</button> </form> </body> </html>'
    // res.send(html);
    //res.sendFile(path.join(__dirname, "../","views", "add_product.html"));
    console.log("control in the /admin/form" )
    res.render('add_product', {doctitle:'Home-admin', path : "/admin/form"});

});

router.post("/users", (req, res, next) => {

    products.push({ title: req.body.username });
    console.log(" in /users middleware");
    console.log('Received form data:', req.body);
    res.redirect('/');
    
});

//module.exports = router;
exports.route= router; // as we set the exports.router is object with key route where in app.js we use it ,so we are sending the router in to it 
exports.products =  products; 
