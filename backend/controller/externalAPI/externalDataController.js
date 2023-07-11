const asyncHandler = require('express-async-handler');
const axios = require('axios');
const YAHOO_FINANCE_API_KEY = process.env.YAHOO_FINANCE_API_KEY;

const getFinancialDataController = asyncHandler(async (req, res) => {
	const encodedParams = new URLSearchParams();
	encodedParams.set('symbol', 'AAPL');

	const options = {
		method: 'POST',
		url: 'https://yfinance-stock-market-data.p.rapidapi.com/stock-info',
		headers: {
			'content-type': 'application/x-www-form-urlencoded',
			'X-RapidAPI-Key': YAHOO_FINANCE_API_KEY,
			'X-RapidAPI-Host': 'yfinance-stock-market-data.p.rapidapi.com',
		},
		data: encodedParams,
	};

	try {
		const response = await axios.request(options);
		res.status(200).json(response.data);
	} catch (error) {
		console.error(error);
	}
});

module.exports = { getFinancialDataController };
