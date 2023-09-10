import { api } from '../api';

export const widgetDataApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getSingleStockData: builder.query({
			query: (stock) => ({
				url: `/singlestockdata/${stock}`,
				method: 'GET',
				credentials: 'include',
			}),
		}),
		getChart: builder.query({
			query: (stock) => ({
				url: `/singlestockchart/${stock}`,
				method: 'GET',
				credentials: 'include',
			}),
		}),
		getMarketChart: builder.query({
			query: () => ({
				url: `/marketchart`,
				method: 'GET',
				credentials: 'include',
			}),
		}),
		getMovers: builder.query({
			query: (type) => ({
				url: `marketmovers/${type}`,
				method: 'GET',
				credentials: 'include',
			}),
		}),
	}),
});

export const { useGetSingleStockDataQuery, useGetChartQuery, useGetMarketChartQuery, useGetMoversQuery } = widgetDataApi;
