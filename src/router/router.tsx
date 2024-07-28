import React from "react";
import { Route, Routes } from "react-router-dom";
import { Homepage } from "../pages/homepage/homepage";
import { Method } from "../pages/method/method";
import { Page } from "../pages/helpers/pageCreator";
import { Therapy } from "../pages/therapy/therapy";
import { Prices } from "../pages/prices/prices";
import { Equipment } from "../pages/equipment/equipment";
import { AdditionalMethods } from "../pages/additionalMethods/additionalMethods";
import { Contacts } from "../pages/contacts/contacts";
import { Reviews } from "../pages/reviews/reviews";

export const AppRouter: React.FC = () => {
	return (
		<Routes>
			<Route path="/" Component={Homepage}/>
			<Route path="/method" Component={Method}/>
			<Route path="/therapy" Component={Therapy}/>
			<Route path="/page" Component={Page}/>
			<Route path="/price" Component={Prices}/>
			<Route path="/equipment" Component={Equipment}/>
			<Route path="/additional_methods" Component={AdditionalMethods}/>
			<Route path="/contacts" Component={Contacts}/>
			<Route path="/reviews" Component={Reviews}/>
		</Routes>
	)
}