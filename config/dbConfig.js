const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('dbLat', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false, 
    define: {
        underscored: true,
        timestamps: true, 
    }
});

sequelize.authenticate()
  .then(() => {
    console.log('Koneksi ke Database berhasil...');
  })
  .catch(err => {
    console.error('Error:', err);
  });

module.exports = sequelize;
