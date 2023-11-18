const express = require('express');
const path = require('path');
const router = express.Router();
const root = require('../utils/paths');

const productadmin  = require('../controllers/productadmin');



// 'admin/form' from actually because its defiend like that in the app.js 
router.get('/form',productadmin.admin_middleware1);

router.post("/users",productadmin.admin_middleware2 );

module.exports = router;
//exports.route= router; // as we set the exports.router is object with key route where in app.js we use it ,so we are sending the router in to it 

