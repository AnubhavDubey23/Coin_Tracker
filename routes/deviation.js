const express = require('express');
const router = express.Router();
const Crypto = require('../models/cryptoModel');

router.get('/deviation', async (req, res) => {
    const { coin } = req.query;

    try {
        const records = await Crypto.find({ coin }).sort({ timestamp: -1 }).limit(100);
        if (records.length === 0) return res.status(404).json({ message: 'No records found' });

        const prices = records.map(record => record.price);
        const mean = prices.reduce((sum, price) => sum + price, 0) / prices.length;
        const variance = prices.reduce((sum, price) => sum + Math.pow(price - mean, 2), 0) / prices.length;
        const stdDeviation = Math.sqrt(variance);

        res.json({ deviation: stdDeviation.toFixed(2) });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
