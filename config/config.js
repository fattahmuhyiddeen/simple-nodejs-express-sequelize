
const config = {
  dialect: 'mysql',
};

  config.host = 'sql6.freemysqlhosting.net';
  config.username = 'sql6432131';
  config.password = 'vHlMcfLdw7';
  config.database = 'sql6432131';
  config.dialectOptions = {
    decimalNumbers: true,
    pool: {
      max: 20,
      min: 0,
      acquire: 60000,
      idle: 10000,
    },
  };

module.exports = config;
