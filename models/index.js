const sequelize = require('../config/dbConfig');
const User = require('./userModel');


// Definisikan relasi antara model
User.hasMany(User, { foreignKey: 'user_id' });
User.belongsTo(User, { foreignKey: 'user_id' });

// Sinkronisasi model dengan database
sequelize.sync({ force: false })
  .then(() => {
    console.log('Database & tables synced!');
  })
  .catch(err => {
    console.error('Sync error:', err);
  });

module.exports = {
  User,
  sequelize 
}