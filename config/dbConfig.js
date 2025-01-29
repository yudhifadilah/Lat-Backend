const { Sequelize } = require('sequelize');

const sequelize = new Sequlize('dbLat', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: 'false',
    define: {
        underscored: true,
        timestamp: true
    }
});

sequelize.authenticate()
  .then(() => {
    console.log('Koneksi ke Database...');
  })
  .catch(err => {
    console.error('Error:', err);
  });

module.exports = sequelize;