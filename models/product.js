const Sequelize = require('sequelize');

const sequelize = require("../util/database");

const products = sequelize.define('products', {
  
  
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true

  }
  ,
  title: {
    type: Sequelize.STRING,
    allowNull: false,    
  },

  price: {
    type: Sequelize.DOUBLE,
    allowNull: false,    
  },

  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,    
    
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,    
    
  },



});

module.exports = products






// const fs = require('fs');
// const path = require('path');

// const Cart = require('./cart');

// const db = require('../util/database');

// const p = path.join(
//   path.dirname(process.mainModule.filename),
//   'data',
//   'products.json'
// );



// module.exports = class Product {
//   constructor(id, title, imageUrl, description, price) {
//     this.id = id;
//     this.title = title;
//     this.imageUrl = imageUrl;
//     this.description = description;
//     this.price = price;
//   }

//   save() {
//      return db.execute('insert into products(title,price,description,imageUrl) values (?,?,?,?)',
//       [this.title, this.price, this.description, this.imageUrl]);
   
//   }

//   static deleteById(id) {
   
//   }

//   static fetchAll() {
//     return db.execute('select * from   products');
  
//   }

//   static findById(id) {
//      return  db.execute('select * from products where products.id= ?', [id] )
    
//   }
// }