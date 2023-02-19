import React from "react";
import PropTypes from "prop-types";
import { Provider } from "react-redux";
import store from "../../../redux/store";

const AppProvider = ({ children }) => {
	return <Provider store={store}>{children}</Provider>;
};

AppProvider.propTypes = {
	children: PropTypes.node,
};

export default AppProvider;
