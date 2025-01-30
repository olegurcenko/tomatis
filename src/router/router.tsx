import React from "react";
import { Route, Routes } from "react-router-dom";
import { Method } from "../pages/method/method";
import { Page } from "../pages/helpers/pageCreator";
import { Therapy } from "../pages/therapy/therapy";
import { Prices } from "../pages/prices/prices";
import { Equipment } from "../pages/equipment/equipment";
import { AdditionalMethods } from "../pages/additionalMethods/additionalMethods";
import { Contacts } from "../pages/contacts/contacts";
import { Reviews } from "../pages/reviews/reviews";
import { AboutUs } from "../pages/aboutUs/aboutUs";
import { Homepage } from "../pages/homepage";
import { TomatisPage } from "../pages/tomatisPage/tomatisPage";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/tomatis_page" element={<TomatisPage />} />
			<Route path="/method" element={<Method />} />
			<Route path="/therapy" element={<Therapy />} />
			<Route path="/page" element={<Page />} />
			<Route path="/price" element={<Prices />} />
			<Route path="/equipment" element={<Equipment />} />
			<Route path="/additional_methods" element={<AdditionalMethods />} />
			<Route path="/contacts" element={<Contacts />} />
			<Route path="/tomatis_reviews" element={<Reviews />} />
			<Route path="/staff_main" element={<AboutUs />} />
		</Routes>
	);
};
