# Crypto Tracker

## Overview
Crypto Tracker is a Node.js-based server-side application that fetches cryptocurrency data and provides APIs to retrieve the latest statistics and calculate the standard deviation of prices. It uses MongoDB as its database and the CoinGecko API to gather cryptocurrency information.

---

## Features

1. **Background Job**
   - Fetches the current price in USD, market cap, and 24-hour change for Bitcoin, Matic, and Ethereum.
   - Updates the database every 2 hours using a scheduled job.

2. **API Endpoints**
   - `/stats`: Retrieves the latest statistics (price, market cap, and 24-hour change) for a given cryptocurrency.
   - `/deviation`: Calculates the standard deviation of the price of a cryptocurrency based on the last 100 records in the database.

3. **Database**
   - MongoDB is used to store cryptocurrency data with fields for price, market cap, 24-hour change, and timestamp.

---

## Project Structure
```
crypto-tracker/
│
├── config/
│   └── db.js            # Database configuration
├── jobs/
│   └── cryptoJob.js     # Background job to fetch crypto data
├── models/
│   └── cryptoModel.js   # Mongoose schema for cryptocurrency data
├── routes/
│   ├── stats.js         # /stats API route
│   └── deviation.js     # /deviation API route
├── server.js            # Application entry point
├── .env                 # Environment variables
├── package.json         # Project dependencies
├── package-lock.json    # Auto-generated file that locks dependencies
└── README.md            # Project documentation
```

---

## Installation and Setup

### Prerequisites
- Node.js installed on your machine
- MongoDB database (local or cloud-based like MongoDB Atlas)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/crypto-tracker.git
   ```
2. Navigate to the project directory:
   ```bash
   cd crypto-tracker
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add the following:
   ```env
   MONGO_URI=mongodb://localhost:27017/crypto-tracker
   ```
   Replace the `MONGO_URI` value if you're using a cloud-based MongoDB.

5. Start the server:
   ```bash
   npm start
   ```
6. The server will run on `http://localhost:5000` by default.

---

## Usage

### Background Job
The background job runs automatically every 2 hours to fetch cryptocurrency data using the CoinGecko API and updates the MongoDB database.

### API Endpoints

#### 1. `/stats`
**Description**: Retrieves the latest data about a cryptocurrency.

**Method**: GET

**Query Parameters**:
```json
{
    "coin": "bitcoin" // Options: bitcoin, matic-network, ethereum
}
```

**Sample Response**:
```json
{
    "price": 40000,
    "marketCap": 800000000,
    "24hChange": 3.4
}
```

---

#### 2. `/deviation`
**Description**: Calculates the standard deviation of the price for a cryptocurrency based on the last 100 records in the database.

**Method**: GET

**Query Parameters**:
```json
{
    "coin": "bitcoin" // Options: bitcoin, matic-network, ethereum
}
```

**Sample Response**:
```json
{
    "deviation": 4082.48
}
```

---

## Dependencies
- `express`: Web framework for building APIs.
- `mongoose`: For MongoDB object modeling.
- `axios`: To fetch data from the CoinGecko API.
- `dotenv`: For environment variable management.
- `node-cron`: For scheduling background jobs.

---

## About `package-lock.json`

The `package-lock.json` file is automatically generated when dependencies are installed using `npm`. It ensures that the exact versions of dependencies and their sub-dependencies are locked, providing consistency across different environments. This file should be committed to version control to maintain reproducibility.

---

## Deployment

### Database Deployment
1. Use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) to deploy your database in the cloud.
2. Update the `MONGO_URI` in your `.env` file with the connection string provided by MongoDB Atlas.

### Application Deployment
You can deploy this application using platforms like:
- [Heroku](https://www.heroku.com/)
- [AWS](https://aws.amazon.com/)
- [Render](https://render.com/)

---

## Best Practices Followed
1. Modular project structure for maintainability.
2. Environment variables for sensitive data.
3. Error handling for API and database operations.
4. Use of version control with meaningful commit messages.

---

## Future Enhancements
1. Add more cryptocurrencies.
2. Implement authentication for the APIs.
3. Cache API responses for faster access.
4. Create a frontend to display the cryptocurrency data.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Author
Developed by [Anubhav Dubey](https://github.com/AnubhavDubey23).

