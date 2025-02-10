import React from "react";
import { Route, Routes } from "react-router-dom";
import { Method } from "../pages/method/method";
import { Page } from "../pages/helpers/pageCreator";
import { Therapy } from "../pages/therapy/therapy";
import { Prices } from "../pages/prices/prices";
import { Equipment } from "../pages/equipment/equipment";
import { AdditionalMethods } from "../pages/additionalMethods/additionalMethods";
import { Contacts } from "../pages/contacts/contacts";
import { AboutUs } from "../pages/aboutUs/aboutUs";
import { Homepage } from "../pages/homepage";
import { TomatisPage } from "../pages/tomatisPage/tomatisPage";
import { AboutCenter } from "../pages/aboutCenter";
import { Specialists } from "../pages/specialists/specialists";
import { CenterRules } from "../pages/centerRules/centerRules";
import { DiagnoseConsult } from "../pages/diagnoseConsult/diagnoseConsult";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Homepage />} />
			<Route path="/about-center" element={<AboutCenter />} />
			<Route path="/specialists" element={<Specialists />} />
			<Route path="/rules" element={<CenterRules />} />
			<Route path="/tomatis_page" element={<TomatisPage />} />
			<Route path="/diagnose-consult" element={<DiagnoseConsult />} />
			
			{/*<Route path="/method" element={<Method />} />*/}
			{/*<Route path="/therapy" element={<Therapy />} />*/}
			{/*<Route path="/page" element={<Page />} />*/}
			{/*<Route path="/price" element={<Prices />} />*/}
			{/*<Route path="/equipment" element={<Equipment />} />*/}
			{/*<Route path="/additional_methods" element={<AdditionalMethods />} />*/}
			<Route path="/contacts" element={<Contacts />} />
			{/*<Route path="/tomatis_reviews" element={<Reviews />} />*/}
			{/*<Route path="/staff_main" element={<AboutUs />} />*/}
		</Routes>
	);
};
