import React from "react";
import PropTypes from "prop-types";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const AppRouter = ({ routes }) => {
	const router = createBrowserRouter(routes);

	return <RouterProvider router={router} />;
};

AppRouter.propTypes = {
	routes: PropTypes.array.isRequired,
};

export default AppRouter;
