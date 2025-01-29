const express = require('express');
const { sequelize } = require('./models');
const userRoutes = require('./routes/userRoutes');


const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk parsing body dari request
app.use(express.json()); // Gunakan express.json() untuk parsing JSON

//routes
app.use('/api/users', userRoutes);


// Middleware untuk menangani error
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!', error: err.message });
  });
  

// Jalankan server
app.listen(PORT, async () => {
    try {
      // Tes koneksi ke database
      await sequelize.authenticate();
      console.log('koneksi database berhasil.');
  
      // Opsional: Sinkronisasi model ke database
      await sequelize.sync({ alter: true }); // Ubah `alter` sesuai kebutuhan
      console.log('Database synchronized successfully.');
  
      console.log(`Server running on http://localhost:${PORT}`);
    } catch (err) {
      console.error('Unable to connect to the database:', err);
    }
  });