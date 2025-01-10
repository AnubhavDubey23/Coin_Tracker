const cron = require('node-cron');
const fetchCryptoData = require('./jobs/cryptoJob');

// Schedule the job to run every 2 hours
cron.schedule('0 */2 * * *', fetchCryptoData);

const express = require('express');
const connectDB = require('./config/db');
const statsRoute = require('./routes/stats');
const deviationRoute = require('./routes/deviation');

require('dotenv').config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api', statsRoute);
app.use('/api', deviationRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
