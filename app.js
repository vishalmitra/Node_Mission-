const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');


//db related
const sequelize = require('./util/database');  // where the actuall database credentials where 
const product = require('./models/product');
const user = require("./models/user");

const Cart = require('./models/cart');
const CartItem  = require('./models/cartItem')


////
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

/*  db.execute('SELECT * FROM products')
   .then(result => {
 console.log(result[0], result[1]);
   })
   .catch(err => {
     console.log(err);
     });
*/
// this below app.use is only working when keep this as the first in calls 
// 

app.use((req, res, next) => {
  user.findByPk(1).
    then(user => {   
    req.user = user;  
    console.log('User set on request:------------------>', req.user);
    next();
  }
   ).catch(err => {console.log(err) } )
 } )


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);


// associations 
product.belongsTo(user, { constraints: true, onDelete: "CASCADE" });
user.hasMany(product);
user.hasOne(Cart);
Cart.belongsTo(user);
Cart.belongsToMany(product, { through: CartItem });
product.belongsToMany(Cart, { through: CartItem });  





app.use(errorController.get404);


 
// sequelize.sync({ force:true})


   
sequelize.sync().then(result => { return user.findByPk(1); })

  .then(User => {
    if (!User) {
      user.create({ email: "vishalmithra7@gmail.com", name: "chebrolu vishal mitra" })
    }
    return User;
  }
  ).
  then(user => {
    user.createCart();
  }  
   )
  .then(User => {
    app.listen(3000);
  })
  .catch(err => { console.log(err) })

//app.listen(3000);
