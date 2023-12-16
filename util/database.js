const Sequelize = require('sequelize');

const config = {
  database: 'node-complete',
  username: 'root',
  password: 'Vishal_7',
  dialect: 'mysql',
  host: 'localhost',
};

const sequelize = new Sequelize(config);

module.exports = sequelize;


// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: 'Vishal_7'
// })

// module.exports = pool.promise();
