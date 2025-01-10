const express = require('express');
const router = express.Router();
const Crypto = require('../models/cryptoModel');

router.get('/stats', async (req, res) => {
    const { coin } = req.query;

    try {
        const latest = await Crypto.findOne({ coin }).sort({ timestamp: -1 });
        if (!latest) return res.status(404).json({ message: 'Coin not found' });

        res.json({
            price: latest.price,
            marketCap: latest.marketCap,
            '24hChange': latest.change24h,
        });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
