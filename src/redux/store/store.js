import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { cat } from "../reducers";
import { catApi } from "../apis";

const store = configureStore({
	reducer: {
		cat,
		catApi: catApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([catApi.middleware]),
});

setupListeners(store.dispatch);

export default store;
