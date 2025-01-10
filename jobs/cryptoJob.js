const axios = require('axios');
const Crypto = require('../models/cryptoModel');

const fetchCryptoData = async () => {
    try {
        const coins = ['bitcoin', 'matic-network', 'ethereum'];
        const response = await axios.get(
            `https://api.coingecko.com/api/v3/simple/price`,
            {
                params: {
                    ids: coins.join(','),
                    vs_currencies: 'usd',
                    include_market_cap: true,
                    include_24hr_change: true,
                },
            }
        );

        const data = response.data;

        for (const coin of coins) {
            await Crypto.create({
                coin,
                price: data[coin].usd,
                marketCap: data[coin].usd_market_cap,
                change24h: data[coin].usd_24h_change,
            });
        }

        console.log('Crypto data updated.');
    } catch (error) {
        console.error('Error fetching crypto data:', error);
    }
};

module.exports = fetchCryptoData;
