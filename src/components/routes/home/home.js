import React from "react";
import { useSelector } from "react-redux";
import { catApi } from "../../../redux/apis";

const Home = () => {
	const { fact } = useSelector((state) => state.cat);

	catApi.useGetFactQuery();

	return <div data-testid="home">{fact}</div>;
};

export default Home;
