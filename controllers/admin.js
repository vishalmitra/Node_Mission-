const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  //const product = new Product(null, title, imageUrl, description, price);
  //product.save().then((result => {  res.redirect('/'); })).catch(err => { console.log(err); }) ;
  console.log(req.user)


  // req.user is nothing but the holding the user from the app.js and  funny thing is 
  // in previously we use the Product.create  with userid=res.user.id but due to association we
  // kept   req.user.createProduct(create+table) and  userid=res.user.id not to use the this
  
  
  
  
  /*belongsTo:  +++++++++++++++++++ association trics

PascalCase (capitalized) because it's a method associated with a single record that belongs to another record.
No plural because it's typically associated with creating a single associated record.
Example: createAssociatedModel (e.g., createProduct)

hasMany:

PascalCase (capitalized) because it's a method associated with multiple records that are associated with the current record.
Plural because it often retrieves a collection of associated records.
Example: getAssociatedModels (e.g., getProducts) */
  req.user.createProduct(
    {
      title: title,
      price: price,
      imageUrl: imageUrl,
      description: description,
     
    }
  )
    .then(result => {
      console.log(result);
      res.redirect('/admin/products');
    })     
    .catch(err => { console.log(err) })
};





exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const prodId = req.params.productId;
  req.user.getProducts.findByPk(prodId).then( product => {
    if (!product) {
      return res.redirect('/');
    }
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: product
    });
  }).catch(err => {console.log(err)})
};

exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDesc = req.body.description;
  Product.findByPk(prodId).then(product =>
          {
    product.title = updatedTitle;
    product.price = updatedPrice;
    product.description = updatedDesc;
    product.imageUrl = updatedImageUrl;
    return product.save();
  }).then(result => {
    console.log("updated ", result)
    res.redirect('/admin/products');  }
    )  // this will catch the both thens errors in show in the one catch block 
            
    .catch(err => { console.log(err) })
 
};


exports.getProducts = (req, res, next) => {
  // here getProducts is the replace of the findAll() due to the association we made it the 
  // getProducts get+Products is created by the sequelize for us here
  req.user.getProducts().then( products => {
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  });
};


exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findByPk(prodId)
    .then(product => { return product.destroy() })

    .then(result => {
      console.log('the product was deleted ')
      res.redirect('/admin/products')
    })
    .catch(err => { console.log(err) });
  
  
};
