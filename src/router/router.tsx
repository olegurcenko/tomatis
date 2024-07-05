import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/homepage/homepage";
import { Method } from "../pages/method/method";
import { Page } from "../pages/helpers/pageCreator";
import { Therapy } from "../pages/therapy/therapy";
import { Prices } from "../pages/prices/prices";

export const AppRouter: React.FC = () => {
	return (
		<Routes>
			<Route path="/" Component={Homepage}/>
			<Route path="/method" Component={Method}/>
			<Route path="/therapy" Component={Therapy}/>
			<Route path="/page" Component={Page}/>
			<Route path="/price" Component={Prices}/>
		</Routes>
	)
}