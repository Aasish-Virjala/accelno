import { configureStore } from '@reduxjs/toolkit';
import { api } from '../api/api';
import authReducer from './slices/authSlice';

const store = configureStore({
	reducer: {
		auth: authReducer,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
	devTools: true,
});

export default store;
