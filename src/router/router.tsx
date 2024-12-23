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
			<Route path="/tomatis_reviews" Component={Reviews}/>
			<Route path="/staff_main" Component={AboutUs}/>
		</Routes>
	)
}

//// Layout for the root path (with HeaderMain)
//const LayoutMain: React.FC = () => (
//  <>
//    <HeaderMain />
//    <main>
//      <Outlet />
//    </main>
//  </>
//);

//// Layout for the /tomatis path (with HeaderTomatis)
//const LayoutTomatis: React.FC = () => (
//  <>
//    <HeaderTomatis />
//    <main>
//      <Outlet />
//    </main>
//  </>
//);

//export const AppRouter: React.FC = () => {
//  return (
//    <Routes>
//      {/* Root Path */}
//      <Route path="/" element={<LayoutMain />}>
//        <Route index element={<Homepage />} />
//        {/* Additional root routes can be added here */}
//      </Route>

//      {/* /tomatis Path */}
//      <Route path="/tomatis" element={<LayoutTomatis />}>
//        <Route index element={<HomepageTomatis />} />
//        <Route path="method" element={<Method />} />
//        <Route path="therapy" element={<Therapy />} />
//        <Route path="page" element={<Page />} />
//        <Route path="price" element={<Prices />} />
//        <Route path="equipment" element={<Equipment />} />
//        <Route path="additional_methods" element={<AdditionalMethods />} />
//        <Route path="contacts" element={<Contacts />} />
//        <Route path="reviews" element={<Reviews />} />
//        <Route path="about_us" element={<AboutUs />} />
//      </Route>
//    </Routes>
//  );
//};
