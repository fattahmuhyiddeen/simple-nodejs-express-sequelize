const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(__filename);
const db = {};

const sequelize = new Sequelize('sql6432131', 'sql6432131', 'vHlMcfLdw7', {
    host:'sql6.freemysqlhosting.net',
    dialect: 'mysql',
    dialectOptions: {
        decimalNumbers: true,
        pool: {
          max: 20,
          min: 0,
          acquire: 60000,
          idle: 10000,
        },
      }
});

fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    // eslint-disable-next-line import/no-dynamic-require, global-require
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

async function check_db_connection() {
    try {
      await db.sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      throw new Error(`Failed to connect to database: ${error}`);
    }
  }
  
  check_db_connection();
  
  module.exports = db;