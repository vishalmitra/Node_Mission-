
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const shop = require('./routes/shop');
const productadmin = require('./controllers/productadmin');
const error = require("./controllers/error")


const path =require('path')


const route = require('./routes/admin');
const dir = require('./utils/paths');
const app = express();

//app.set('view engine', 'pug');  this time going with the ejs we have both in our app 
app.set('view engine', 'ejs'); 
app.set('views', 'views');

app.use(express.static(path.join(__dirname,"public")));

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin',route);

app.use(shop);

app.use(error.page404)


app.listen(3000);
