// 








const express = require('express');
const app = express();
require('dotenv').config(); // Load .env
const cors = require('cors');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const UserRoute = require('./routes/UserRoute');
const RoleRoute = require('./routes/RoleRoute');

app.use('/user', UserRoute);
app.use('/role', RoleRoute);

// Server Setup
const PORT = process.env.PORT || 4955;
const HOST = '0.0.0.0'; // This allows all devices in the local network to access

app.listen(PORT, HOST, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`✅ Server is running and accessible at: http://192.168.0.248:${PORT}`);
  }
});
