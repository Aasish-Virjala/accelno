const asyncHandler = require('express-async-handler');
const axios = require('axios');

// This is the controller for the Single Stock Data component and returns all required data based on stock symbol

const getSingleStockDataController = asyncHandler(async (req, res) => {
	const { stock } = req.params;
	const options = {
		method: 'GET',
		url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-analysis',
		params: {
			symbol: stock,
			region: 'US',
		},
		headers: {
			'X-RapidAPI-Key': 'a1bfd2d55bmsh079eab2a6266698p18129ajsnc1702b55d612',
			'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
		},
	};
	try {
		const response = await axios.request(options);
		res.status(200).json(response.data.price);
	} catch (error) {
		console.error(error);
	}
});

// This is the controller for the Stock Chart component and Stacked Chart Component and returns all required chart data based on stock symbol

const getSingleStockChartController = asyncHandler(async (req, res) => {
	const { stock } = req.params;

	const options = {
		method: 'GET',
		url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-chart',
		params: {
			interval: '1wk',
			symbol: stock,
			range: '1y',
			region: 'US',
			includePrePost: 'false',
			useYfid: 'true',
			includeAdjustedClose: 'true',
			events: 'capitalGain,div,split',
		},
		headers: {
			'X-RapidAPI-Key': 'a1bfd2d55bmsh079eab2a6266698p18129ajsnc1702b55d612',
			'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
		},
	};

	try {
		const response = await axios.request(options);
		res.status(200).json(response.data);
	} catch (error) {
		console.error(error);
	}
});

// This is the controller for the Market Chart component

const getMarketChartController = asyncHandler(async (req, res) => {
	const options = {
		method: 'GET',
		url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-summary',
		params: { region: 'US' },
		headers: {
			'X-RapidAPI-Key': 'a1bfd2d55bmsh079eab2a6266698p18129ajsnc1702b55d612',
			'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
		},
	};

	try {
		const response = await axios.request(options);
		res.status(200).json(response.data);
	} catch (error) {
		console.error(error);
	}
});

// This controller is for the Market Movers component and returns the top 6 gainers, losers, and active stocks based on the type parameter
// type = gainers, losers, active

const getMarketMoversController = asyncHandler(async (req, res) => {
	const { type } = req.params;

	const options = {
		method: 'GET',
		url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-movers',
		params: {
			region: 'US',
			lang: 'en-US',
			start: '0',
			count: '5',
		},
		headers: {
			'X-RapidAPI-Key': 'a1bfd2d55bmsh079eab2a6266698p18129ajsnc1702b55d612',
			'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
		},
	};

	try {
		const response = await axios.request(options);
		if (type === 'gainers') {
			const gainersData = response.data.finance.result[0].quotes;
			const gainersStocks = gainersData.map((stock) => stock.symbol);
			const gainersString = gainersStocks.join(',');

			// get price and % change for each stock in gainersData
			// we will pass the data to another endpoint and get back details of each stock in gainersData

			const gainersOptions = {
				method: 'GET',
				url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes',
				params: {
					region: 'US',
					symbols: gainersString,
				},
				headers: {
					'X-RapidAPI-Key': 'a1bfd2d55bmsh079eab2a6266698p18129ajsnc1702b55d612',
					'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
				},
			};

			const gainersResponse = await axios.request(gainersOptions);
			const updatedGainersData = [
				...gainersResponse.data.quoteResponse.result.map((stock) => ({
					symbol: stock.symbol,
					price: stock.regularMarketPrice,
					change: stock.regularMarketChangePercent,
					shortName: stock.shortName,
				})),
			];
			res.status(200).json(updatedGainersData);
		} else if (type === 'losers') {
			const losersData = response.data.finance.result[1].quotes;
			const losersStocks = losersData.map((stock) => stock.symbol);
			const losersString = losersStocks.join(',');

			// get price and % change for each stock in gainersData
			// we will pass the data to another endpoint and get back details of each stock in gainersData

			const losersOptions = {
				method: 'GET',
				url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes',
				params: {
					region: 'US',
					symbols: losersString,
				},
				headers: {
					'X-RapidAPI-Key': 'a1bfd2d55bmsh079eab2a6266698p18129ajsnc1702b55d612',
					'X-RapidAPI-Host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
				},
			};

			const losersResponse = await axios.request(losersOptions);
			const updatedlosersData = [
				...losersResponse.data.quoteResponse.result.map((stock) => ({
					symbol: stock.symbol,
					price: stock.regularMarketPrice,
					change: stock.regularMarketChangePercent,
					shortName: stock.shortName,
				})),
			];
			res.status(200).json(updatedlosersData);
		} else if (type === 'active') {
			const activeData = response.data.finance.result[2].quotes;
			res.status(200).json(activeData);
		}
	} catch (error) {
		console.error(error);
	}
});

module.exports = { getSingleStockDataController, getSingleStockChartController, getMarketChartController, getMarketMoversController };
