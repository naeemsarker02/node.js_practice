const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes


// Test route
app.get('/', (req, res) => {
  res.send('Admin Panel Backend is running...');
});

// Sync DB and Start Server
sequelize.sync({ alter: true }) // use { force: true } for reset
  .then(() => {
    console.log('Database synced ✅');
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('DB sync failed ❌', err);
  });
