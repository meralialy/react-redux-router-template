import { createSlice } from "@reduxjs/toolkit";
import catApi from "../apis/cat-api";

const initialState = {};

export const slice = createSlice({
	name: "cat",
	initialState,
	extraReducers(builder) {
		builder.addMatcher(catApi.endpoints.getFact.matchFulfilled, (_state, { payload }) => {
			return payload;
		});
	},
});

export default slice.reducer;
