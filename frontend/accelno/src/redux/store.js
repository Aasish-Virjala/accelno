import { configureStore } from '@reduxjs/toolkit';
import { api } from '../api/api';
import authReducer from './slices/authSlice';
import widgetsReducer from './slices/widgetSlice';
import modalReducer from './slices/modalSlice';
import themeReducer from './slices/themeSlice';

const store = configureStore({
	reducer: {
		auth: authReducer,
		[api.reducerPath]: api.reducer,
		widgets: widgetsReducer,
		modal: modalReducer,
		theme: themeReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
	devTools: true,
});

export default store;
