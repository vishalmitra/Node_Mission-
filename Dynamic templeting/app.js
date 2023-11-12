
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const shop = require('./routes/shop');

const path =require('path')


const route = require('./routes/admin');
const dir = require('./utils/paths');
const app = express();

//app.set('view engine', 'pug');  this time going with the ejs we have both in our app 
app.set('view engine', 'ejs'); 
app.set('views', 'views');

app.use(express.static(path.join(__dirname,"public")));

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin',route.route);

app.use(shop);

app.use((req, res, next) => {
    //res.status(404).send('<h1> page not found </h1>');
    //res.status(404).sendFile(path.join(__dirname,"./","views","404.html"))});
    res.status(404).render('404', {doctitle:"not found"})
} )


    app.listen(3000);
